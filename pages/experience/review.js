import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Reset } from '../../Redux/';
import { Reset as userReset } from '../../Redux/currentUserState';
import axios from 'axios';
import Loading from '../../components/Loading';
import { useCookies } from 'react-cookie';
import Head from 'next/head';
import useCheckUser from '../../customHook/useCheckUser';
function Review() {
  const [cookies, setCookies] = useCookies(['userToken']);
  const [isLoading, setIsloading] = useState(false);
  const [user] = useCheckUser(cookies?.userToken);
  const [msg, setmsg] = useState('');
  const { array } = useSelector((state) => state.moreDetails);
  let router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (array.length == 0) {
      router.push('/experience/expdescrip');
    }
  }, );

  const getStarted = () => {
    setIsloading(true);
    axios
      .post('/api/update', {
        value: array,
        token: cookies.userToken,
        name: 'jobDetails',
      })
      .then((res) => {
        if (res.data.status) {
          router.push('/cv');
          dispatch(Reset());
          dispatch(userReset());
        } else {
          setmsg(res.data.message);
        }
        setIsloading(false);
      });
  };

  const addPosition = () => {
    router.push('/experience');
  };
  return (
    <div>
      <Head>
        <title>Experience</title>
      </Head>
      <div>
        <div className="whole">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="formSide p-5">
                      <h2>Job Review</h2>
                      <p>Add,edit, or remove your work experience </p>
                      <hr />
                      {array.map((val, index) => (
                        <>
                          <span className="fw-bold text-dark">
                            {index + 1}.
                            <span className="fw-bold text-secondary">
                              {val.jobTitle},{val.employer}
                            </span>
                          </span>{' '}
                          <br />
                          <small className="mx-3">
                            {val.startYear}
                          </small> to{' '}
                          <small className="mx-3">{val.endYear}</small>
                          <br />
                        </>
                      ))}

                      <button className="addPosition" onClick={addPosition}>
                        + Add another Position{' '}
                      </button>

                      <div className="d-flex justify-content-end mt-4">
                        <button className="startedBtn" onClick={getStarted}>
                          Save & Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading && <Loading />}
    </div>
  );
}

export default Review;
