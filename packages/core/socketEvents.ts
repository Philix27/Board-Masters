export const SocketEvents = {
  JOIN_ROOM: 'JOIN_ROOM',
  CREATE_ROOM: 'CREATE_ROOM',
  LEAVE_ROOM: 'LEAVE_ROOM',
  MOVE_PIECE: 'MOVE_PIECE',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
  USER_CONNECTED: 'USER_CONNECTED',
  CHECKMATE: 'CHECKMATE',
};

export type ISocketEvents =
  | 'USER_DISCONNECTED'
  | 'USER_CONNECTED'
  | 'CHECKMATE'
  | 'MOVE_PIECE'
  | 'JOIN_ROOM'
  | 'CREATE_ROOM'
  | 'LEAVE_ROOM';

export interface ISocket {
  JOIN_ROOM: {};
  CREATE_ROOM: {};
  LEAVE_ROOM: {};
  MOVE_PIECE: {
    from: string;
    to: string;
  };
  USER_DISCONNECTED: {
    userId: string
  };
  USER_CONNECTED: {};
  CHECKMATE: {};
}

export const ISocketObj: Record<ISocketEvents, any> = {
  JOIN_ROOM: {},
  CREATE_ROOM: {},
  LEAVE_ROOM: {},
  MOVE_PIECE: {
    from: '',
    to: '',
  },
  USER_DISCONNECTED: {
    userId: '',
  },
  USER_CONNECTED: {},
  CHECKMATE: {},
};
