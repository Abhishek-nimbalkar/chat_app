import { IncomingMessage } from "http";
import { Socket } from "socket.io-client";

export interface IServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

export interface IClientToServerEvents {
  message: () => void;
}

export interface IInterServerEvents {
  ping: () => void;
}

export interface ISocket {
 socket:Socket
}

export interface IMessage{
        text: string,
        name: string,
        id: string,
        socketID: string,
}
export interface IUser{
  userName:string,
  socketID:string
}
// export type IUseRef = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface IUseRef{
  current:HTMLDivElement|undefined|null
}