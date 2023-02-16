import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { useCookies } from 'react-cookie';
import useCheckUser from "../../customHook/useCheckUser"
import Loading from "../../components/Loading"
import {Reset} from "../../Redux/currentUserState"

const edureview = () => {
  let router= useRouter()
  const {arrayOfDetails}=useSelector((state)=>state.education)
  const [cookies,setCookies]=useCookies(["userToken"])
  const [user]=useCheckUser(cookies?.userToken);
  const [msg,setmsg]=useState("");
  const [isloading,setisloading]=useState(false)
  const dispatch=useDispatch()
    const getStarted=()=>{
      setisloading(true)
      axios.post("/api/update",{name:"educationDetail",value:arrayOfDetails,token:cookies.userToken}).then((res)=>{
        if(res.data.status){
          router.push("/cv");
          dispatch(Reset());
        }else{
          setmsg(res.data.message)
        }
        setisloading(false)
      })
    }
    useEffect(()=>{
      if(arrayOfDetails.length==0){
        router.push("/education/edudetails")
      }
    },[])
    const addPosition=()=>{
      router.push("/education/edudetails")
    }
  return (
    <div>
        <div>
        <div className='whole'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="formSide p-5">
                              
                              <h2>Education Review</h2>
                              <p>Add,edit, or remove your Education </p>
                              <hr/>
                              {
                                arrayOfDetails.map((val,index)=>(
                                  <main className='mt-3'>
                                  <span className="fw-bold text-dark">{index+1}.<span className="fw-bold text-secondary">{val.schoolName}</span></span> <br/>
                                  <small className="mx-3">{val.degree}</small><br/>
                                  </main>
                                ))
                              }

                            <button className="addPosition" onClick={addPosition}>+ Add more Education </button>

                             <div className="d-flex justify-content-end mt-4">
                                  <button className="startedBtn" onClick={getStarted}>Save & Next</button>
                                </div>

                            
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
                              {
                                isloading&& <Loading/>
                              }
    </div>
  )
}

export default edureview