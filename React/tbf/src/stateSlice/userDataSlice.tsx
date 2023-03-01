import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
const initialStateConatact=[{
    Name:"",
    email:"",
    companyName:"",
    needs:""

}]
const initialStateUser=[{
    email:"",
}]

export type Conatact={
    // payload(payload: any): void | { Name: string; email: string; companyName: string; needs: string; }[] | import("immer/dist/internal").WritableDraft<{ Name: string; email: string; companyName: string; needs: string; }>[];
    Name:string,
    email:string,
    companyName:string,
    needs:string

}
export type User={
    email:string,
    password:string
}

export const ConatactData=createSlice({
    name:'contactData',
    initialState:initialStateConatact,
    reducers:{
        update:(state:any,action:PayloadAction<Conatact>)=>{
            // state.push(action.payload)
            state=state.push(action.payload)
        }
    }
})
export const UserData=createSlice({
    name:'userData',
    initialState:initialStateUser,
    reducers:{
        addUser:(state:any,action:PayloadAction<User>)=>{
            // state.push(action.payload)
            state=state.push(action.payload)
        }
    }
})
export const {update} = ConatactData.actions;
export const{addUser}=UserData.actions;

export const conatactSliceReducer=ConatactData.reducer;
export const userSliceReducer=UserData.reducer;
