import { createSlice } from "@reduxjs/toolkit";



const educationDetail=createSlice({
    name:"education",
    initialState:{
       
        arrayOfDetails:[],
    },
    reducers:{
        addEducationDetails:(state,action)=>{
           state.arrayOfDetails=[...state.arrayOfDetails,action.payload]
        }
    }
})

export const { addEducationDetails} =educationDetail.actions

export default educationDetail.reducer