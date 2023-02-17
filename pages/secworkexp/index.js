import React from 'react';
import { useRouter } from 'next/router';
function Experience() {
  let router = useRouter();
  const getStarted = () => {
    router.push('/experience/expdescrip');
  };
  return (
    <div>
      <div>
        <div className="whole">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="formSide p-5">
                      <h2>Job Details</h2>
                      <p>Lets start with your most recent job</p>
                      <label for="">Job title</label>
                      <input type="" name="" value="" className="conInp" />
                      <label for="">Employer</label>
                      <input type="" name="" value="" className="conInp" />

                      <div className="row">
                        <div className="col-6">
                          <label for="">City</label>
                          <input type="" name="" value="" className="conInp" />
                        </div>
                        <div className="col-2">
                          <label for="">State</label>
                          <input type="" name="" value="" className="conInp" />
                        </div>
                        <div className="col-4">
                          <label for="">Zip code</label>
                          <input type="" name="" value="" className="conInp" />
                        </div>
                      </div>
                      <label for="">Country</label>
                      <input type="" name="" value="" className="conInp" />
                      <div className="row">
                        <div className="col-6">
                          <label for="">Start Month</label>
                          <input type="" name="" value="" className="conInp" />
                        </div>
                        <div className="col-6">
                          <label for="">Start Year</label>
                          <input type="" name="" value="" className="conInp" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <label for="">End Month</label>
                          <input type="" name="" value="" className="conInp" />
                        </div>
                        <div className="col-6">
                          <label for="">End Year</label>
                          <input type="" name="" value="" className="conInp" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-4">
                        <button className="startedBtn" onClick={getStarted}>
                          Save & Next
                        </button>
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
    </div>
  );
}

export default Experience;
