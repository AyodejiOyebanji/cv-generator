import { createSlice } from "@reduxjs/toolkit";



const current=createSlice({
    name:"cv",
    initialState:{
        currentUser:undefined,
    },
    reducers:{
        addCurrent:(state,action)=>{
          state.currentUser=action.payload
            
        },Reset:(state,payload)=>{
            state.currentUser=undefined
        }
    }
})

export const { addCurrent,Reset    } =current.actions

export default current.reducer