import { Socket } from 'socket.io-client';

export type ISocketEvents = {
  JOIN_ROOM: string;
  CREATE_ROOM: string;
  MOVE_PIECE: string;
  LEAVE_ROOM: string;
  USER_DISCONNECTED: string;
  INIT_GAME: string;
  OPPONENT_DISCONNECTED: string;
  GAME_OVER: string;
  GAME_JOINED: string;
  GAME_ALERT: string;
  GAME_ADDED: string;
  USER_TIMEOUT: string;
  GAME_TIME: string;
  GAME_ENDED: string;
  EXIT_GAME: string;
};
export type IEventsReturn = {
  JOIN_ROOM: {};
  CREATE_ROOM: {};
  MOVE_PIECE: {
    from: string;
    to: string;
    userAddress: string;
  };
  LEAVE_ROOM: {};
  USER_DISCONNECTED: {};
  INIT_GAME: {};
  OPPONENT_DISCONNECTED: {};
  GAME_OVER: {};
  GAME_JOINED: {};
  GAME_ALERT: {};
  GAME_ADDED: {};
  USER_TIMEOUT: {};
  GAME_TIME: {};
  GAME_ENDED: {};
  EXIT_GAME: {};
};
export type IEmitReturn = {
  JOIN_ROOM: {};
  CREATE_ROOM: {};
  MOVE_PIECE: {
    from: string;
    to: string;
    userAddress: string;
  };
  LEAVE_ROOM: {};
  USER_DISCONNECTED: {};
  INIT_GAME: {};
  OPPONENT_DISCONNECTED: {};
  GAME_OVER: {};
  GAME_JOINED: {};
  GAME_ALERT: {};
  GAME_ADDED: {};
  USER_TIMEOUT: {};
  GAME_TIME: {};
  GAME_ENDED: {};
  EXIT_GAME: {};
};

export const SocketEvents: ISocketEvents = {
  JOIN_ROOM: 'JOIN_ROOM',
  CREATE_ROOM: 'CREATE_ROOM',
  MOVE_PIECE: 'MOVE_PIECE',
  LEAVE_ROOM: 'LEAVE_ROOM',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
  INIT_GAME: 'INIT_GAME',
  OPPONENT_DISCONNECTED: 'OPPONENT_DISCONNECTED',
  GAME_OVER: 'GAME_OVER',
  GAME_JOINED: 'GAME_JOINED',
  GAME_ALERT: 'GAME_ALERT',
  GAME_ADDED: 'GAME_ADDED',
  USER_TIMEOUT: 'USER_TIMEOUT',
  GAME_TIME: 'GAME_TIME',
  GAME_ENDED: 'GAME_ENDED',
  EXIT_GAME: 'EXIT_GAME',
};

// const emit: Record<keyof ISocketEvents, (props: any) => void> = {
export const constructSocketEmitter = (socket: Socket) => {
  return {
    JOIN_ROOM: function (props: IEmitReturn['JOIN_ROOM']): void {
      socket!.emit<keyof ISocketEvents>('JOIN_ROOM', props);
    },
    CREATE_ROOM: function (props: IEmitReturn['CREATE_ROOM']): void {
      socket!.emit<keyof ISocketEvents>('CREATE_ROOM', props);
    },
    MOVE_PIECE: function (props: IEmitReturn['MOVE_PIECE']): void {
      socket!.emit<keyof ISocketEvents>('MOVE_PIECE', props);
    },
    LEAVE_ROOM: function (props: IEmitReturn['LEAVE_ROOM']): void {
      socket!.emit<keyof ISocketEvents>('LEAVE_ROOM', props);
    },
    USER_DISCONNECTED: function (props: IEmitReturn['USER_DISCONNECTED']): void {
      socket!.emit<keyof ISocketEvents>('USER_DISCONNECTED', props);
    },
    INIT_GAME: function (props: IEmitReturn['INIT_GAME']): void {
      socket!.emit<keyof ISocketEvents>('INIT_GAME', props);
    },
    OPPONENT_DISCONNECTED: function (props: IEmitReturn['OPPONENT_DISCONNECTED']): void {
      socket!.emit<keyof ISocketEvents>('OPPONENT_DISCONNECTED', props);
    },
    GAME_OVER: function (props: IEmitReturn['GAME_OVER']): void {
      socket!.emit<keyof ISocketEvents>('GAME_OVER', props);
    },
    GAME_JOINED: function (props: IEmitReturn['GAME_JOINED']): void {
      socket!.emit<keyof ISocketEvents>('GAME_JOINED', props);
    },
    GAME_ALERT: function (props: IEmitReturn['GAME_ALERT']): void {
      socket!.emit<keyof ISocketEvents>('GAME_ALERT', props);
    },
    GAME_ADDED: function (props: IEmitReturn['GAME_ADDED']): void {
      socket!.emit<keyof ISocketEvents>('GAME_ADDED', props);
    },
    USER_TIMEOUT: function (props: IEmitReturn['USER_TIMEOUT']): void {
      socket!.emit<keyof ISocketEvents>('USER_TIMEOUT', props);
    },
    GAME_TIME: function (props: IEmitReturn['GAME_TIME']): void {
      socket!.emit<keyof ISocketEvents>('GAME_TIME', props);
    },
    GAME_ENDED: function (props: IEmitReturn['GAME_ENDED']): void {
      socket!.emit<keyof ISocketEvents>('GAME_ENDED', props);
    },
    EXIT_GAME: function (props: IEmitReturn['EXIT_GAME']): void {
      socket!.emit<keyof ISocketEvents>('EXIT_GAME', props);
    },
  };
};
