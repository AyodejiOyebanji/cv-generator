import React from 'react';
import {useRouter} from 'next/router';
import {useCookies} from "react-cookie"
import useCheckUser from "../../customHook/useCheckUser"
import Head from "next/head";
const index = () => {
    let router= useRouter()
    const [cookies,setCookies]=useCookies(["userToken"])
    const [user]=useCheckUser(cookies?.userToken);
    const getStarted=()=>{
      router.push("/skill/skilldesc")
    }
  return (
    <div>
      <Head>
        <title>Skills</title>
      </Head>
         <div>
        <div className='whole'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="expTipSec p-5">
                              <h6 className="fw-bold">Let's get into</h6>
                              <h2 className="fw-bold">Skills</h2>
                              <p >We'll help you showcase a short list of skills you've developed throughout your experience - a quick way for potential employers to see if you are a good fit.</p>
                              
                             <div className="d-flex justify-content-end mt-4">
                                  <button className="startedBtn" onClick={getStarted}>Next</button>
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

    </div>
  )
}

export default index


