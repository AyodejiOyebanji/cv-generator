import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { AddUser,Reset } from "../../Redux/UserSlice";
import Loading from "../../components/Loading"
import axios from "axios";
const Signup = () => {
  const [isLoading,setIsloading]=useState(false)
  const [errorMsg,seterrorMsg]=useState("")
  const useroute = useRouter();
  const dispatch=useDispatch();
  const { detail } = useSelector((state) => state.details);
  useEffect(() => {
    if (!detail?.name) {
      useroute.push("/Contact");
    }
  },[detail, useroute]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setIsloading(true)
      axios.post("/api/Signup",{...detail,...values}).then(res=>{
        if(res.data.status){
          dispatch(Reset())
          useroute.push("/Login")
        }else{
          seterrorMsg(res.data.message)
          console.log(res)
        }
        setIsloading(false)
      });
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
  });

  return (
    <div>
      <div>
        <div>
          <div className="whole">
            <div className="container ">
              <div className="row ">
                <div className="col-12 ">
                  <div className="row ">
                    <form
                      onSubmit={formik.handleSubmit}
                      className="col-sm-12 col-md-12 col-lg-6  mx-auto "
                    >
                      <div className="formSide p-5 shadow">
                        <h1>Dont lose your hard work!</h1>
                        <p>Create an account so we can save your progress.</p>
                        {errorMsg ? (
                          <div className="alert alert-danger text-center">
                            {errorMsg}
                          </div>
                        ) : (
                          ""
                        )}
                        <h2>Sign Up</h2>

                        <label for="">Email</label>
                        <input
                          type="text"
                          name="email"
                          className="conInp"
                          onChange={formik.handleChange}
                        />
                        <label for="">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="conInp"
                          onChange={formik.handleChange}
                        />

                        <div className="d-flex justify-content-end mt-4">
                          <button className="startedBtn" type="submit">
                            Create account{" "}
                          </button>
                        </div>
                        <div className="text-center mt-5">
                          <Link href="">Already have an account?Login</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        isLoading&& <Loading/>
      }
    </div>
  );
};

export default Signup;
