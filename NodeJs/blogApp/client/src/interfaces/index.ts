import { ReactElement } from "react";
import { Socket } from "socket.io-client";
import { JsxElement } from "typescript";

interface IRoutes {
  path: string;
  element: ReactElement;
  restricted: boolean;
}
interface ISignInForm {
  email: string;
  password: string;
}
interface IForgot {
  email: string;
}
interface IForgotPass {
  password: string;
}
interface ISignUpForm {
  email: string;
  password: string;
  phoneNumber: string;
  userName: string;
}
interface IApiData {
  userId: string;
  _id: any;
  title: string;
  body: string;
  images: [string];
}

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
  socket: Socket;
}

export interface IMessage {
  text: string;
  name: string;
  id: string;
  socketID: string;
}
export interface IUser {
  userName: string;
  socketID: string;
}
// export type IUseRef = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface IUseRef {
  current: HTMLDivElement | undefined | null;
}
export interface IChatUser {
  connected: boolean;
  hasNewMessages: boolean;
  messages: Array<any>;
  self: boolean;
  userID: string;
  userName: string;
}

export type {
  IRoutes,
  ISignInForm,
  ISignUpForm,
  IApiData,
  IForgot,
  IForgotPass,
};
