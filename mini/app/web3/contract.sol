// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "solmate/tokens/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

event GameCreated(uint256 indexed gameId, address indexed player1, address indexed player2, uint256 stakeAmount);
event GameStarted(uint256 indexed gameId);
event GameEnded(uint256 indexed gameId, address indexed winner, uint256 reward);
event StakeWithdrawn(uint256 indexed gameId, address indexed player, uint256 amount);

struct Game {
    address player1;
    address player2;
    uint256 stakeAmount;
    address winner;
    bool gameStarted;
    bool gameEnded;
}

struct WaitingPlayer {
    address player;
    uint256 stakeAmount;
    uint256 lastGameId;
}

contract BoardMasters {
    IERC20 public cUSD;

    WaitingPlayer public waitingPlayer = WaitingPlayer(address(0), 0, 0);

    uint256 public gameCounter = 1;
    mapping(uint256 => Game) public games;
    mapping(uint256 => mapping(address => uint256)) public gameBalances;

    mapping(address => uint256[]) public playerGames; // Tracks games for each player

    modifier onlyPlayers(uint256 gameId) {
        require(msg.sender == games[gameId].player1 || msg.sender == games[gameId].player2, "Not a participant");
        _;
    }

    modifier gameInProgress(uint256 gameId) {
        require(games[gameId].gameStarted && !games[gameId].gameEnded, "Game not in progress");
        _;
    }

    modifier gameNotStarted(uint256 gameId) {
        require(!games[gameId].gameStarted, "Game already started");
        _;
    }

    modifier gameEndedOnly(uint256 gameId) {
        require(games[gameId].gameEnded, "Game not ended yet");
        _;
    }

    constructor(address _cUSDAddress) {
        cUSD = IERC20(_cUSDAddress);
    }

    // * write fn

    function joinGame(uint256 _stakeAmount) external returns (uint256) {
        if (waitingPlayer.player == address(0) || waitingPlayer.stakeAmount == 0) {
            stake(gameCounter++, msg.sender, _stakeAmount);
            waitingPlayer = WaitingPlayer({player: msg.sender, stakeAmount: _stakeAmount, lastGameId: gameCounter});

            return 0;
        } else {
            require(waitingPlayer.player != msg.sender, "You are already waiting for a second player");
            require(waitingPlayer.stakeAmount == _stakeAmount, "Both players must stake the exact amount");

            stake(gameCounter++, msg.sender, _stakeAmount);
            uint256 counter = createGame(waitingPlayer.player, msg.sender, _stakeAmount, gameCounter++);

            startGame(counter);

            waitingPlayer = WaitingPlayer({player: address(0), stakeAmount: 0, lastGameId: 0});

            return counter;
        }
    }

    function createGame(address p1, address p2, uint256 _stakeAmount, uint256 gameId) private returns (uint256) {
        games[gameId] = Game({
            player1: p1,
            player2: p2,
            stakeAmount: _stakeAmount,
            winner: address(0),
            gameStarted: false,
            gameEnded: false
        });

        playerGames[p2].push(gameId);
        playerGames[p1].push(gameId);

        emit GameCreated(gameId, p2, p1, _stakeAmount);
        return gameId;
    }

    function stake(uint256 gameId, address player, uint256 amount) private {
        require(cUSD.transferFrom(player, address(this), amount), "Stake transfer failed");
        gameBalances[gameId][player] += amount;

        emit StakeWithdrawn(gameId, player, amount);
    }

    function startGame(uint256 gameId) private gameNotStarted(gameId) onlyPlayers(gameId) {
        Game storage game = games[gameId];
        require(
            gameBalances[gameId][game.player1] == game.stakeAmount
                && gameBalances[gameId][game.player2] == game.stakeAmount,
            "Both players must stake the exact amount"
        );

        game.gameStarted = true;

        emit GameStarted(gameId);
    }

    function setWinner(uint256 gameId, address _winner) external gameInProgress(gameId) onlyPlayers(gameId) {
        Game storage game = games[gameId];
        require(_winner == game.player1 || _winner == game.player2, "Winner must be a player in the game");

        game.winner = _winner;
        game.gameEnded = true;

        uint256 reward = gameBalances[gameId][game.player1] + gameBalances[gameId][game.player2];
        require(cUSD.transfer(_winner, reward), "Reward transfer failed");

        emit GameEnded(gameId, _winner, reward);
    }

    // function withdrawStake(uint256 gameId) external gameEndedOnly(gameId) onlyPlayers(gameId) {
    //     Game storage game = games[gameId];
    //     require(msg.sender != game.winner, "Winner cannot withdraw stake");

    //     uint256 amount = gameBalances[gameId][msg.sender];
    //     require(amount > 0, "No balance to withdraw");

    //     gameBalances[gameId][msg.sender] = 0;
    //     require(cUSD.transfer(msg.sender, amount), "Withdrawal transfer failed");

    //     emit StakeWithdrawn(gameId, msg.sender, amount);
    // }

    // * Read fn

    function getGameDetails(uint256 gameId)
        external
        view
        returns (
            address player1,
            address player2,
            uint256 stakeAmount,
            address winner,
            bool gameStarted,
            bool gameEnded
        )
    {
        Game storage game = games[gameId];
        return (game.player1, game.player2, game.stakeAmount, game.winner, game.gameStarted, game.gameEnded);
    }

    function getBalance(uint256 gameId) external view returns (uint256) {
        return gameBalances[gameId][msg.sender];
    }

    function getPlayerGames(address player) external view returns (uint256[] memory) {
        return playerGames[player];
    }
}
