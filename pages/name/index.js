import React,{useState} from 'react'
import {useRouter} from 'next/router';
import {AddUser} from "../../Redux/UserSlice" ;
import {useDispatch} from "react-redux";
import Head from "next/head"
function Index() {
  let router= useRouter();
  const dispatch=useDispatch();
  const [fullname, setFullname] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const getStarted=()=>{
      if(fullname==""){
        setErrorMsg("Kindly fill up your missing Details")
      }
      else if(fullname.length<5){
        setErrorMsg("Fullname must be atleast five characters")
      }
      else{
        dispatch(AddUser({fullname}))
        router.push("/profilepic")

      }
  }
  return (
    <div>
      <Head>
        <title>Name</title>
      </Head>
        <div className='whole'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-6">

                            <div className="formSide p-5">
                              {errorMsg?<div className="alert alert-danger text-center">{errorMsg}</div>:""}
                              <h4 className="text-primary">Welcome!</h4>
                              <h1 className="letsText">Lets build a resume that gets you hired.</h1>

                              <div className="inputSection">
                                <p className="formDes p-3">Enter your name as you would like it to appear on your resume.</p>
                                <div className="p-3">

                                <input type="text" className="fullNameInp " placeholder="Full name"  onChange={(e)=>setFullname(e.target.value)}/>
                                <hr/>
                                <div className="d-flex justify-content-end">
                                  <button className="startedBtn" onClick={getStarted}>Lets get started </button>
                                </div>
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

    </div>
  )
}

export default Index