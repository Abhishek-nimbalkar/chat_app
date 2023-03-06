import { createSlice,PayloadAction} from "@reduxjs/toolkit";




export type ProductType={
    // payload(payload: any): void | { Name: ""; email: ""; companyName: ""; needs: ""; }[] | import("immer/dist/internal").WritableDraft<{ Name: ""; email: ""; companyName: ""; needs: ""; }>[];
    id:"",
    title:"",
    price:"",
    description:"",
    category:"",
    image:"",
    rating:{
        rate:"",
        count:""
    }
}
export type UserType=[{
    address:any,
    id:"",
    email:"",
    username:"",
    password:"",
    name:any,
    phone:"",
    __v:any


}]

const ProductsInitialState=[{
    id:"",
    title:"",
    price:"",
    description:"",
    category:"",
    image:"",
    rating:{
        rate:"",
        count:""
    }
}]

export const ProductsData=createSlice({
    name:'ProductsData',
    initialState:[],
    reducers:{
        addProduct:(state:any,action:PayloadAction<any>)=>{
            // state.push(action.payload)
            state=state.push(action.payload)
            // return [...state,action.payload]
            // console.log(state);
            
        }
    }
})
export const UsersData=createSlice({
    name:'usersData',
    initialState:[],
    reducers:{
        addUser:(state:any,action:PayloadAction<any>)=>{
            // state.push(action.payload)
                state=state.push(action.payload)
            
                // state.push(action.payload)
                
        }
    }
})
export const {addProduct} = ProductsData.actions;
export const{addUser}=UsersData.actions;

export const productsSliceReducer=ProductsData.reducer;
export const usersSliceReducer=UsersData.reducer;
