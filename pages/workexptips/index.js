import React from 'react'
import {useRouter} from 'next/router'
const WorkTips = () => {
    let router= useRouter()
    const getStarted=()=>{
      router.push("/experience")
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
                            <div className="expTipSec p-5">
                              <h6 className="fw-bold">Let's get into</h6>
                              <h2 className="fw-bold">Work Experience</h2>
                              <p >We'll make it easy to input your work experience and write a job description showcasing the best of your talents.</p>
                              
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

export default WorkTips