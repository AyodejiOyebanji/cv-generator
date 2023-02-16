import Image from 'next/image';
import React from 'react';

import Link from 'next/link'

function index() {
  
  return (
    <div>
  
      
    <div >
      <div className="hero">
          <div className="container">
            <div className="row">
              <div className="col-10">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                  <h1 className='heroBigText text-light'>Move your resume to the top of the yes pile</h1>
                  <p className=" herosmallText text-light">Our professional Resume Builder has helped thousands of job seekers land more interviews and get hired faster.</p>
                  <Link href="/name"><button className='buildBtn' >Build my resume</button></Link>
                  
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <Image src="/writing.png" alt="" width="400" height="350"/>
                  
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