import React from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { addMoreDetails } from '../../Redux/';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Head from 'next/head';
import { useCookies } from 'react-cookie';
import useCheckUser from '../../customHook/useCheckUser';
function Expdesc() {
  let router = useRouter();
  const dispatch = useDispatch();
  const { moreDetails } = useSelector((state) => state.moreDetails);
  const [cookies, setCookies] = useCookies(['userToken']);
  const [user] = useCheckUser(cookies?.userToken);
  React.useEffect(() => {
    if (!moreDetails) {
      router.push('/experience');
    }
  });
  const formik = useFormik({
    initialValues: {
      desc: '',
      desc1: '',
      desc2: '',
      desc3: '',
      desc4: '',
    },
    onSubmit: (values) => {
      dispatch(addMoreDetails({ desc: values }));
      router.push('/experience/review');
    },
    validationSchema: yup.object({
      desc: yup.string().required().trim(),
      desc1: yup.string().required().trim(),
      desc2: yup.string().required().trim(),
      desc3: yup.string().required().trim(),
      desc4: yup.string().required().trim(),
    }),
  });
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
                  <form
                    onSubmit={formik.handleSubmit}
                    className="col-sm-12 col-md-12 col-lg-6"
                  >
                    <div className="formSide p-5">
                      <h2>Job Description</h2>
                      <p>
                        {moreDetails?.jobTitle},{moreDetails?.employer}
                      </p>
                      <b>What are/were you responsible for at this job ?</b>
                      <br />

                      <li className="text-primary"></li>
                      <input
                        type="text"
                        name="desc"
                        className="conInp"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Determined whether user needs could be incorporated into existing applications or required new development."
                      />
                      <li className="text-primary"></li>
                      <input
                        type="text"
                        name="desc1"
                        className="conInp"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Conferred with engineering team members to optimize the interface of software and hardware"
                      />
                      <li className="text-primary"></li>
                      <input
                        type="text"
                        name="desc2"
                        className="conInp"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Conferred with engineering team members to optimize the interface of software and hardware"
                      />
                      <li className="text-primary"></li>
                      <input
                        type="text"
                        name="desc3"
                        className="conInp"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Conferred with engineering team members to optimize the interface of software and hardware"
                      />
                      <li className="text-primary"></li>
                      <input
                        type="text"
                        name="desc4"
                        className="conInp"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Conferred with engineering team members to optimize the interface of software and hardware"
                      />

                      <div className="d-flex justify-content-end mt-4">
                        <button className="startedBtn" type="submit">
                          Save & Next
                        </button>
                      </div>
                    </div>
                  </form>
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

export default Expdesc;
