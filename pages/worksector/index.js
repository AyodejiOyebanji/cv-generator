import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { AddUser } from '../../Redux/UserSlice';
import Head from 'next/head';
const JobType = [
  'Healthcare',
  ' Information technology',
  'Retail',
  ' Real estate /Development',
  'Education',
  'Government',
];
function Index() {
  let router = useRouter();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.details);
  useEffect(() => {
    if (!detail?.workExpType) {
      router.push('/workexperience');
    }
  },[router,detail]);
  const sec = (e) => {
    dispatch(AddUser({ worksector: e }));
    router.push('/Contact');
  };

  return (
    <div>
      <Head>
        <title>Work Sector</title>
      </Head>
      <div className="whole">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="formSide p-5">
                    <h4 className="text-primary">Great!</h4>
                    <h1 className="expText">
                      Are you looking for a job in a specific field?
                    </h1>

                    <div className="inputSection">
                      <p className="expDes p-3">
                        Select one (1) job sectors. We will assist you in
                        structuring your resume.
                      </p>

                      {JobType.map((val) => (
                        <button
                          type="submit"
                          onClick={(e) => sec(val)}
                          className="jobBtn text-primary m-2"
                          key={val}
                        >
                          <span className="plus">+</span> {val}
                        </button>
                      ))}

                      {/* <input type="text" className="fullNameInp " placeholder="Other"/> */}

                      <hr />
                    </div>
                    <div className="d-flex justify-content-end">
                      {/* <button className="startedBtn" onClick={getStarted}>Continue</button> */}
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
