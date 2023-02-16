import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Loading from "../../components/Loading"
import { useCookies } from "react-cookie";
import { useDispatch, } from "react-redux";
import useCheckUser from "../../customHook/useCheckUser"
import Head from "next/head"
const Signup = () => {
  const dispatch=useDispatch()
  const [isLoading,setIsloading]=useState(false)
  const [message,setmessage]=useState("")
 const [cookies,setCookies]=useCookies(["userToken"])

  let router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setIsloading(true)
      axios.post("api/Login",values).then((res)=>{
          if(res.data.status){
            router.push("/cv")
            setCookies("userToken", res.data.token, {
              path: "/",
              maxAge: 36000000000,
              sameSite: true,
            });

          }else{
            setmessage(res.data.message)
          }
          setIsloading(false)
      })
    },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required(),
    }),
  });
  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
      {
        isLoading&& <Loading/>
      }
      <div>
        <div>
          <div className="whole">
            <div className="container ">
              <div className="row ">
                <div className="col-12 ">
                  <div className="row ">
                    <div className="col-sm-12 col-md-12 col-lg-6  mx-auto ">
                      <form onSubmit={formik.handleSubmit} className="formSide p-5 shadow">
                      <h1 className="text-center">Welcome back</h1>
                        <h2>Login</h2>
                        {
                        message&&<div className="alert alert-danger text-center text-danger">{message}</div>
                        }
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            name="email"
                            className={
                              formik.touched.email
                                ? formik.errors.email
                                  ? "form-control is-invalid"
                                  : "form-control is-valid"
                                : "form-control"
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        <label htmlFor="">Password</label>
                        <input
                            type="text"
                            name="password"
                            className={
                              formik.touched.password
                                ? formik.errors.password
                                  ? "form-control is-invalid"
                                  : "form-control is-valid"
                                : "form-control"
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />

                        <div className="d-flex justify-content-end mt-4">
                          <button className="startedBtn" type="submit">
                            Create account
                          </button>
                        </div>
                        <div className="text-center mt-5">
                          <Link href="/name">Dont't have account? Create !</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
