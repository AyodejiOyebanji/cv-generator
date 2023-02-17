import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import {AddUser} from "../../Redux/UserSlice"
import Head from "next/head"
let allExperience = [
  {
    "No experience": "",
  },
  {
    "Entry Level": "Less than 3 years",
  },
  {
    "Intermidiate": "3 to 5 years",
  },
  {
    "Mid Level": "5 to 10 years",
  },
  {
    "Senior-Level": "10+ years",
  },
];

function Index() {
  let router = useRouter();
  const { detail } = useSelector((state) => state.details);
  useEffect(() => {
    if ( !detail?.fullname) {
      router.push("/name");
    }
  },[detail,router]);
  const dispatch = useDispatch();
  const getStarted = (item) => {
    dispatch(AddUser({"workExpType":item}))
    router.push('/worksector');
  };

  return (
    <div>
      <Head>
        <title>Work Experience</title>
      </Head>
      <div className="whole">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="formSide p-5">
                    <h4 className="text-primary">
                      Nice to meet you, {detail && detail.fullname}
                    </h4>
                    <h1 className="expText">What is your work experience?</h1>

                    <div className="inputSection">
                      <p className="expDes p-3">
                        We will get a better idea of your resume needs based on
                        your selection.
                      </p>
                      {allExperience.map((val) => (
                        <button
                          key={val}
                          className="expBtn btn btn-primary m-2"
                          onClick={() => getStarted(Object.keys(val)[0])}
                        >
                          <b className="text-light ">{Object.keys(val)[0]}</b>
                          <p className="text-light "> {Object.values(val)[0]}</p>
                        </button>
                      ))}
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
