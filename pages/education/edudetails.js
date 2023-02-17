import React,{useState} from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addEducationDetails } from "../../Redux/education";
import { useCookies } from 'react-cookie';
import useCheckUser from "../../customHook/useCheckUser"
function Edudetails() {
  let router = useRouter();
  const [cookies,setCookies]=useCookies(["userToken"])
  const [user]=useCheckUser(cookies?.userToken);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      schoolName: "",
      degree: "",
      city: "",
      state: "",
      zipCode: "",
      fieldOfStudy: "",
      graduationYear: "",
    },
    onSubmit: (values) => {
      dispatch(addEducationDetails(values));
      router.push("/education/edureview");
    },
    validationSchema: yup.object({
      schoolName: yup.string().required().trim(),
      degree: yup.string().required().trim(),
      city: yup.string().required().trim(),
      state: yup.string().required().trim(),
      zipCode: yup.string().required().trim(),
      fieldOfStudy: yup.string().required().trim(),
      graduationYear: yup.string().required().trim(),
    }),
  });
  return (
    <div>
      <Head>
        <title>Education</title>
      </Head>
      <div>
        <div className="whole">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="col-sm-12 col-md-12 col-lg-6"
                  >
                    <div className="formSide p-5">
                      <h2>Education Details</h2>
                      <p>Where did you attend school?</p>
                      <label for="">School Name</label>
                      <input
                        type=""
                        name="schoolName"
                        onChange={formik.handleChange}
                        className="conInp"
                      />
                      <label for="">Degree</label>
                      <input
                        type=""
                        name="degree"
                        onChange={formik.handleChange}
                        className="conInp"
                      />

                      <div className="row">
                        <div className="col-6">
                          <label for="">City</label>
                          <input
                            type=""
                            name="city"
                            onChange={formik.handleChange}
                            className="conInp"
                          />
                        </div>
                        <div className="col-2">
                          <label for="">State</label>
                          <input
                            type=""
                            name="state"
                            onChange={formik.handleChange}
                            className="conInp"
                          />
                        </div>
                        <div className="col-4">
                          <label for="">Zip code</label>
                          <input
                            type=""
                            name="zipCode"
                            onChange={formik.handleChange}
                            className="conInp"
                          />
                        </div>
                      </div>
                      <label for="">Field Of Study</label>
                      <input
                        type=""
                        name="fieldOfStudy"
                        onChange={formik.handleChange}
                        className="conInp"
                      />
                      <div className="row">
                        <div className="col-12">
                          <label for="">Graduation Year</label>
                          <input
                            type="month"
                            name="graduationYear"
                            onChange={formik.handleChange}
                            className="conInp"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-4">
                        <button className="startedBtn" type="submit">
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

export default Edudetails;
