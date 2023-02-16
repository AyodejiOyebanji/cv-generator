import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { AddUser } from '../../Redux/UserSlice';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';
function index() {
  let router = useRouter();
  const [imageState, setimageState] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const getImage = (e) => {
    const myFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(myFile);

    reader.onload = () => {
      setimageState(reader.result);
      console.log(reader.result);
    };
  };
  const getStarted = () => {
    if (imageState == '') {
      setErrorMsg('Kindly upload your image');
    } else {
      localStorage.setItem('CvImage', JSON.stringify(imageState));
      router.push('/workexperience');
    }
  };
  return (
    <div>
      <Head>
        <title>Picture</title>
      </Head>
      <div className="whole">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="formSide p-5">
                    {errorMsg ? (
                      <div className="alert alert-danger text-center">
                        {errorMsg}
                      </div>
                    ) : (
                      ''
                    )}

                    <h4 className="text-primary">Upload your Picture!</h4>
                    <h1 className="letsText">
                      Your picture will be attached to your resume.
                    </h1>
                    <div className="image-upload ms-3">
                      <label for="file-input">
                        {imageState === '' ? (
                          <Image
                            src="/avater2-removebg-preview.png"
                            alt=""
                            srcset=""
                            className="uploadImg"
                            width="200"
                            height="200"
                          />
                        ) : (
                          <Image
                            src={imageState}
                            alt=""
                            srcset=""
                            className="uploadImgReal"
                            width="200"
                            height="200"
                          />
                        )}
                      </label>

                      <input
                        type="file"
                        id="file-input"
                        onChange={(e) => getImage(e)}
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="startedBtn" onClick={getStarted}>
                        Save{' '}
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
  );
}

export default index;
