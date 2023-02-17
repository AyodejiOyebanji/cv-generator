import React from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import useCheckUser from "../../customHook/useCheckUser";
import Head from "next/head";
function Index() {
  let router = useRouter();
  const [cookies, setCookies] = useCookies(["userToken"]);
  const [user] = useCheckUser(cookies?.userToken);
  const getStarted = () => {
    router.push("/prosum/profsumm");
  };
  return (
    <div>
      <Head>
        <title>Summary</title>
      </Head>

      <div>
        <div className="whole">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="expTipSec p-5">
                      <h6 className="fw-bold">Lets wrap it up with </h6>
                      <h2 className="fw-bold">Professional Summary</h2>
                      <p>
                        A professional summary appears at the top of your resume
                        at 2-3 impactual sentences. Its one of the first things
                        hiring managers see, so we will help you write a great
                        one.
                      </p>

                      <div className="d-flex justify-content-end mt-4">
                        <button className="startedBtn" onClick={getStarted}>
                          Next
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

export default Index;
