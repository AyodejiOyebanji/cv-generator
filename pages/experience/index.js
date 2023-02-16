import React,{useState} from 'react'
import {useRouter} from 'next/router';
import {useFormik} from "formik"
import {useSelector, useDispatch} from "react-redux";
import { addMoreDetails} from "../../Redux/"
import { useCookies } from 'react-cookie';
import useCheckUser from "../../customHook/useCheckUser"
import * as yup from "yup";
import Head from "next/head";
function Experience() {
    let router= useRouter();
    const [cookies,setCookies]=useCookies(["userToken"])
    const [user]=useCheckUser(cookies?.userToken);
    const [isLoading,setIsloading]=useState(false)
    const [msg,setmsg]=useState("")
    const dispatch=useDispatch();
    const formik =useFormik({
      initialValues:{
        jobTitle:"",
        employer:"",
        city:"",
        state:"",
        zipcode:"",
        startYear:"",
        endYear:""
      },
      onSubmit:(values)=>{
        dispatch( addMoreDetails(values))
        router.push("/experience/expdescrip")
      },
      validationSchema:yup.object({
        jobTitle:yup.string().required().trim(),
        employer:yup.string().required().trim(),
        city:yup.string().required().trim(),
        state:yup.string().required().trim(),
        zipcode:yup.string().required().trim(),
        startYear:yup.string().required().trim(),
        endYear:yup.string().required().trim()
      })
    })
    
  return (
    <div>
      <Head>
        <title>Experience</title>
      </Head>
        
        <div>
        <div className='whole'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div  className="row">
                          <form onSubmit={formik.handleSubmit} className="col-sm-12 col-md-12 col-lg-6">
                            <div className="formSide p-5">
                              
                              <h2>Job Details</h2>
                              <p>Let's start with your most recent job</p>
                             <label htmlFor="">Job title</label>
                             <input type="" name="jobTitle"  onChange={formik.handleChange} onBlur={formik.handleBlur} className='conInp'/>
                             <label htmlFor="">Employer</label>
                             <input type="" name="employer"  onChange={formik.handleChange} onBlur={formik.handleBlur} className='conInp'/>
                             <div className='row'>
                              <div className="col-6">
                              <label htmlFor="">City</label>
                              <input type="" name="city"  onChange={formik.handleChange} onBlur={formik.handleBlur} className='conInp'/>
                              </div>
                              <div className="col-2">
                              <label htmlFor="">State</label>
                              <input type="" name="state"  onChange={formik.handleChange} onBlur={formik.handleBlur} className='conInp'/>
                              </div>
                              <div className="col-4">
                              <label htmlFor="">Zip code</label>
                              <input type="" name="zipcode"  onChange={formik.handleChange} onBlur={formik.handleBlur} className='conInp'/>
                              </div>
                             </div>
                             <label htmlFor="">Country</label>
                             <input type="" name="country"  onChange={formik.handleChange} onBlur={formik.handleBlur} className='conInp'/>
                             <div className='row'>
                              <div className="col-6">
                              <label htmlFor="">Start Year</label>
                              <input type="month" name="startYear"  onChange={formik.handleChange} onBlur={formik.handleBlur} className='conInp'/>
                              </div>
                              <div className="col-6">
                              <label htmlFor="">End Year</label>
                              <input type="month" name="endYear"  onChange={formik.handleChange} onBlur={formik.handleBlur} className='conInp'/>
                              </div>
                          
                             </div>
                             <div className="d-flex justify-content-end mt-4">
                                  <button className="startedBtn" type="submit">Save & Next</button>
                                </div>

                            </div>


                          </form>
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

export default Experience