import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
const initialState=[{
    Name:"",
    email:"",
    companyName:"",
    needs:""

}]

export type User={
    // payload(payload: any): void | { Name: string; email: string; companyName: string; needs: string; }[] | import("immer/dist/internal").WritableDraft<{ Name: string; email: string; companyName: string; needs: string; }>[];
    Name:string,
    email:string,
    companyName:string,
    needs:string

}

export const UserData=createSlice({
    name:'userData',
    initialState,
    reducers:{
        update:(state:any,action:PayloadAction<User>)=>{
            // state.push(action.payload)
            
            
            state=state.push(action.payload)
        }
    }
})
export const {update} = UserData.actions;
export default UserData.reducer