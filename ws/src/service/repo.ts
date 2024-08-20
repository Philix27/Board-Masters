import { PrismaClient } from "@prisma/client";

export class AppRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createGame(props: { userId: string }) {
    const waitingGame = await this.prisma.waitingRoom.findFirst({
      where: {
        status: "WAITING",
      },
    });

    if (waitingGame?.firstPlayerId) {
      //! Create game

      //! First player is always white
      const game = await this.prisma.games.create({
        data: {
          blackPlayerId: props.userId,
          whitePlayerId: waitingGame.firstPlayerId,
          status: "IN_PROGRESS",
          timeControl: "BLITZ",
        },
      });

      //! update waiting game
      const response = await this.prisma.waitingRoom.update({
        where: {
          id: waitingGame.id,
        },
        data: {
          status: "JOINED",
        },
      });

      return {
        msg: "JOINED",
        ...game,
      };
    } else {
      //! create waitingGame
      const res = await this.prisma.waitingRoom.create({
        data: {
          firstPlayerId: props.userId,
        },
      });

      return {
        msg: "CREATED",
        ...res,
      };
    }
  }

  async cancelWaitingGame(props: { userId: string }) {
    const waitingGame = await this.prisma.waitingRoom.findFirst({
      where: {
        status: "WAITING",
        firstPlayerId: props.userId,
      },
    });

    const response = await this.prisma.waitingRoom.update({
      where: {
        id: waitingGame!.id,
      },
      data: {
        status: "CANCELLED",
      },
    });
  }

  async makeMove(props: {
    from: string;
    to: string;
    playerId: string;
    gameId: string;
  }) {
    const res = await this.prisma.moves.create({
      data: {
        from: props.from,
        to: props.to,
        playerId: props.playerId,
        gameId: props.gameId,
        moveNumber: 2,
        before: "",
        after: "",
      },
    });
  }

  async createUser(props: { walletAddress: string; userName: string }) {
    await this.prisma.users.create({
      data: {
        username: props.userName,
        wallet: props.walletAddress,
      },
    });
  }

  async updateUser(props: {
    walletAddress: string;
    userId: string;
    username: string;
    totalPoint: number;
  }) {
    await this.prisma.users.update({
      where: {
        id: props.userId,
      },
      data: {
        wallet: props.walletAddress,
        username: props.username,
        total_points: props.totalPoint,
      },
    });
  }
}
