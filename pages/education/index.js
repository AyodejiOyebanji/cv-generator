import React,{useState} from 'react'
import {useRouter} from 'next/router'
import { useCookies } from 'react-cookie';
import useCheckUser from "../../customHook/useCheckUser"
import Head from "next/head"
const Education = () => {
  const [cookies,setCookies]=useCookies(["userToken"])
  const [user]=useCheckUser(cookies?.userToken);
    let router= useRouter()
    const getStarted=()=>{
      router.push("/education/edudetails")
    }
  return (
    <div>
      <Head>

        <title>Education</title>
      </Head>
         <div>
        <div className='whole'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="expTipSec p-5">
                              <h6 className="fw-bold">Nest, Let us get into</h6>
                              <h2 className="fw-bold">Education</h2>
                              <p >It is a good idea to add your educational background, including training courses and vocational programs, even if you have not completed them yet. </p>
                              
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

export default Education