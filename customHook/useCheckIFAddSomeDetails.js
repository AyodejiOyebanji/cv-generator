import React,{useEffect, useState} from "react"
import {useRouter } from "next/router"

const useCheckIFAddSomeDetails=(user)=>{
    const useRoute=useRouter();
    useEffect(()=>{
        functionToTrigger()
    },[user])
    
    const functionToTrigger=()=>{
        if(user){
            if(user.jobDetails.length==0){
                useRoute.push("/experience")
            }else if(user.educationDetail.length==0 ){
                useRoute.push("/education/")
            }else if(user.skills.length==0 ){
                useRoute.push("/skill/")

            }else if(!user.profSum ){
                useRoute.push("/prosum/")

            }
        }
    }
    return []
}
 
export default  useCheckIFAddSomeDetails