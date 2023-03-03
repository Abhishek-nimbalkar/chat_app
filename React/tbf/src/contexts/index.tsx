import { createContext } from "react";

import { Conatact } from "stateSlice/userDataSlice";

export interface IContact{
    Name:string;
    email:string;
    companyName:string;
    needs:string;
}

// export interface IContactArray{
//     []:IContact=>[]
// }

export type IContactType=IContact[];
// interface IContact extends Array<IContact>{}

export interface IContactContext {
    contact: IContactType,
    setContact: (contact:IContactType)=> void;
}

export const initialStateOfContext: IContactContext={
    contact: [] as IContactType,
    setContact: ()=> null
}

export const useContactContext=createContext<IContactContext>(initialStateOfContext);

// export const UserContextProvider = UserContext.Provider;
// export const UserContextConsumer = UserContext.Consumer;