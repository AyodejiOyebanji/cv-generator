import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import Head from "next/head";
import {AddUser} from "../../Redux/UserSlice";
import {useDispatch,useSelector} from "react-redux";
function Contact() {
  let router = useRouter();
  const {detail}=useSelector((state)=>state.details)
  const [getCurrentUser, setgetCurrentUser] = useState([]);
  const [fullname, setFullname] = useState("");
  const dispatch=useDispatch()

  useEffect(() => {
    if(!detail?.worksector){
      router.push("/worksector")
    }
  }, []);
  const [errorMsg, setErrorMsg] = useState("");
  const formik = useFormik({
    initialValues: {
      name:"",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      dispatch(AddUser(values))
      router.push("/Signup");
    },
    validationSchema: yup.object({
      name:yup.string().required(),
      address:yup.string().required(),
      city: yup.string().required().trim(),
      state: yup.string().required().trim(),
      zipcode: yup.string().required().trim(),
      country: yup.string().required().trim(),
      email: yup.string().required().trim(),
      phone: yup.string().required().trim(),
    }),
  });

  return (
    <div>
      <Head>
        <title>
          Contact  
        </title>
      </Head>
      <div>

        <div className="whole">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <form onSubmit={formik.handleSubmit} className="col-sm-12 col-md-12 col-lg-6">
                    <div className="formSide p-5">
                      {errorMsg ? (
                        <div className="alert alert-danger text-center">
                          {errorMsg}
                        </div>
                      ) : (
                        ""
                      )}
                      <h6>Let's start with </h6>
                      <h4>Contact Information</h4>
                      <p>
                        It's best to share at least your name, email, and phone
                      </p>
                      <label for="">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="conInp"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        
                      />
                      <label for="">Address</label>
                      <input
                        type="text"
                        name="address"
                        className="conInp"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />

                      <div className="row">
                        <div className="col-6">
                          <label for="">City</label>
                          <input
                            type="text"
                            name="city"
                            className="conInp"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                        <div className="col-2">
                          <label for="">State</label>
                          <input
                            type="text"
                            name="state"
                            className="conInp"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                        <div className="col-4">
                          <label for="">Zip code</label>
                          <input
                            type="number"
                            name="zipcode"
                            className="conInp"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                      </div>
                      <label for="">Country</label>
                      <input
                        type="text"
                        name="country"
                        className="conInp"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <div className="row">
                        <div className="col-6">
                          <label for="">Email</label>
                          <input
                            type="email"
                            name="email"
                            className="conInp"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                        <div className="col-6">
                          <label for="">Phone</label>
                          <input
                            type="number"
                            name="phone"
                            className="conInp"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-4">
                        <button className="startedBtn" >
                          Save & Next
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="col-sm-12 col-md-12 col-lg-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
