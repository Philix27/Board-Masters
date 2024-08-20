// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BoardMasters {
    IERC20 public cUSD;

    struct Game {
        address player1;
        address player2;
        uint256 stakeAmount;
        address winner;
        bool gameStarted;
        bool gameEnded;
    }

    uint256 public gameCounter;
    mapping(uint256 => Game) public games;
    mapping(uint256 => mapping(address => uint256)) public gameBalances;
    mapping(address => uint256[]) public playerGames; // Tracks games for each player

    event GameCreated(uint256 indexed gameId, address indexed player1, address indexed player2, uint256 stakeAmount);
    event GameStarted(uint256 indexed gameId);
    event GameEnded(uint256 indexed gameId, address indexed winner, uint256 reward);
    event StakeWithdrawn(uint256 indexed gameId, address indexed player, uint256 amount);

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

    function createGame(address _player2, uint256 _stakeAmount) external returns (uint256) {
        gameCounter++;
        games[gameCounter] = Game({
            player1: msg.sender,
            player2: _player2,
            stakeAmount: _stakeAmount,
            winner: address(0),
            gameStarted: false,
            gameEnded: false
        });

        playerGames[msg.sender].push(gameCounter);
        playerGames[_player2].push(gameCounter);

        emit GameCreated(gameCounter, msg.sender, _player2, _stakeAmount);
        return gameCounter;
    }

    function stake(uint256 gameId) external onlyPlayers(gameId) gameNotStarted(gameId) {
        Game storage game = games[gameId];
        require(cUSD.transferFrom(msg.sender, address(this), game.stakeAmount), "Stake transfer failed");

        gameBalances[gameId][msg.sender] += game.stakeAmount;
    }

    function startGame(uint256 gameId) external gameNotStarted(gameId) onlyPlayers(gameId) {
        Game storage game = games[gameId];
        require(gameBalances[gameId][game.player1] == game.stakeAmount && gameBalances[gameId][game.player2] == game.stakeAmount, "Both players must stake the exact amount");

        game.gameStarted = true;

        emit GameStarted(gameId);
    }

    function endGame(uint256 gameId, address _winner) external gameInProgress(gameId) onlyPlayers(gameId) {
        Game storage game = games[gameId];
        require(_winner == game.player1 || _winner == game.player2, "Winner must be a player in the game");

        game.winner = _winner;
        game.gameEnded = true;

        uint256 reward = gameBalances[gameId][game.player1] + gameBalances[gameId][game.player2];
        require(cUSD.transfer(_winner, reward), "Reward transfer failed");

        emit GameEnded(gameId, _winner, reward);
    }

    function withdrawStake(uint256 gameId) external gameEndedOnly(gameId) onlyPlayers(gameId) {
        Game storage game = games[gameId];
        require(msg.sender != game.winner, "Winner cannot withdraw stake");

        uint256 amount = gameBalances[gameId][msg.sender];
        require(amount > 0, "No balance to withdraw");

        gameBalances[gameId][msg.sender] = 0;
        require(cUSD.transfer(msg.sender, amount), "Withdrawal transfer failed");

        emit StakeWithdrawn(gameId, msg.sender, amount);
    }

    function getGameDetails(uint256 gameId) external view returns (address player1, address player2, uint256 stakeAmount, address winner, bool gameStarted, bool gameEnded) {
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
