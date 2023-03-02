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

export interface IContactContext {
    contact: IContact [],
    setContact: (contact: IContact[]) => void;
}

export const initialStateOfContext: IContactContext={
    contact: {} as IContact[],
    setContact:  () => null
}

export const ContactContext=createContext<IContactContext>(initialStateOfContext);

// export const UserContextProvider = UserContext.Provider;
// export const UserContextConsumer = UserContext.Consumer;