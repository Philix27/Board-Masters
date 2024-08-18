import { PrismaClient } from "@prisma/client";

export class GameRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(props: { userAddress: string }) {
    //*ANCHOR -  generate strat game time
    this.prisma.users.create({
      data: {},
    });
  }
  async update(props: { byUserAddress: string }) {}
}

export class MovesRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async makeMove(props: {
    from: string;
    to: string;
    player: string;
    gameId: string;
  }) {}
  async update() {}
}

export class UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(props: { walletAddress: string; userName: string }) {}
  async update(props: {}) {}
}
