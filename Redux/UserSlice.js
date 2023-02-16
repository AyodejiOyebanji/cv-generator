import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name:"Register",
    initialState: { detail:undefined},
    reducers:{
        AddUser:(state,action)=>{
            if(state.detail){
                state.detail={...state.detail,...action.payload}
            }else{
                state.detail={...action.payload}
            }
        },
        Reset:(state,)=>{
            state.detail=undefined
        },

       

    }

})

export const {AddUser,Reset}=UserSlice.actions;
export default UserSlice.reducer