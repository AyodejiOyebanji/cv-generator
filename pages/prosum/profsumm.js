import React,{useState} from 'react'
import {useRouter} from 'next/router'
import { useCookies } from 'react-cookie';
import useCheckUser from "../../customHook/useCheckUser"
import axios from "axios";
import Head from "next/head";
import Loading from "../../components/Loading";
import {useDispatch} from "react-redux";
import {Reset} from "../../Redux/currentUserState"
function profsumm() {
     let router= useRouter()
     const [cookies,setCookies]=useCookies(["userToken"])
     const [user]=useCheckUser(cookies?.userToken);
     const [summary,setSummarry]=useState("");
     const [isloading,setisloading]=useState(false);
     const [msg,setmsg]=useState("");
     const dispatch=useDispatch();
    const getStarted=()=>{
      if(!summary){
        
        setmsg("Kindly fill the details")
      }
      else if(summary.length<20){
        setmsg("your summary must be atleast 20 characters")
      }else{
        setisloading(true)
        axios.post("/api/update",{name:"profSum",value:summary,token:cookies.userToken}).then((res)=>{
          if(res.data.status){
            router.push("/cv")
            dispatch(Reset())
          }else{
            setmsg(res.data.message)
          }
          setisloading(false)
        })
      }
    }
  return (
    <div>
      <Head>
        <title>Summary</title>
      </Head>
         <div>
        <div className='whole'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="formSide p-5">
                              {msg&& <div className="alert alert-danger text-center text-danger">
                                {msg}
                                </div>}
                              
                              <h2>Professional Summary </h2>
                              <p>Keep in mind, you will want to tailor your summarry to the job you are applying for</p>
                             <textarea rows="15" onChange={(e)=>setSummarry(e.target.value)} cols="65"></textarea>
                             <div className="d-flex justify-content-end mt-4">
                                  <button className="startedBtn" onClick={getStarted}>Save & Next</button>
                                </div>

                            </div>


                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-6">

                          </div>
                      </div>
                      
                    </div>


                </div>
                
            </div>
            
        </div>

    </div>
    {
      isloading && <Loading/>
    }
    </div>
  )
}

export default profsumm