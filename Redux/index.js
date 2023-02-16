import { createSlice } from "@reduxjs/toolkit";



const CreateCv=createSlice({
    name:"start",
    initialState:{
        moreDetails:undefined,
        array:[],
    },
    reducers:{
        addMoreDetails:(state,action)=>{
            if(state.moreDetails){
                state.moreDetails={...state.moreDetails,...action.payload};
                state.array=[...state.array,state.moreDetails]
                state.moreDetails=undefined
            }else{
                state.moreDetails=action.payload
            }
        },
        Reset:(state)=>{
            state.array=[]
        }
    }
})

export const { addMoreDetails,Reset} =CreateCv.actions

export default CreateCv.reducer