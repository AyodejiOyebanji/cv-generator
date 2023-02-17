import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import {useCookies} from "react-cookie"
import useCheckUser from "../../customHook/useCheckUser"
import {useDispatch} from "react-redux";
import Loading from "../../components/Loading";
import {Reset} from "../../Redux/currentUserState"
const listOfSkill = [
  "Prioritization",
  "Public Speaking",
  "Update software",
  "Evaluation",
  "Management",
  "Tolerance",
];
const Skilldesc = () => {
  let router = useRouter();
  const [cookies,setCookies]=useCookies(["userToken"])
  const [user]=useCheckUser(cookies?.userToken);
  const dispatch=useDispatch();
  const getStarted = () => {
    if(userInput){
      setUserSkills((prev)=>[...prev,userInput])
      setUserInput("")
    }
  };
  const [userSkills, setUserSkills] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isloading, setisloading] = useState("");
  const [msg, setmsg] = useState("");
  const handleNext=()=>{
    setisloading(true)
    axios.post("/api/update",{name:"skills",value:userSkills,token:cookies.userToken}).then((res)=>{
      if(res.data.status){
        router.push("/prosum");
        dispatch(Reset())
      }else{
        setmsg(res.data.message)
      }
      setisloading(false)
    })
  }
  return (
    <div>
      <Head>
        <title>Skills</title>
      </Head>
      <div className="whole">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="formSide p-5">
                    <h4 className="text-primary">Skills</h4>
                    <h1 className="expText">
                      List  6-8 of you top skills to highlight
                    </h1>

                    <div className="inputSection">
                      {listOfSkill
                        .filter((val) => !userSkills.includes(val))
                        .map((val) => (
                          <>
                            <button
                              onClick={() =>
                                setUserSkills((prev) => [...prev, val])
                              }
                              type=""
                              className="jobBtn text-primary m-2"
                            >
                              <span className="plus">+</span> {val}
                            </button>
                          </>
                        ))}
                      <input
                        type="text"
                        onChange={(e)=>setUserInput(e.target.value)}
                        value={userInput}
                        className="fullNameInp "
                        placeholder="Other"
                      />

                      <hr />

                      {
                        userSkills.length!=0 && (
                          <>
                          <span>List of your skills</span>
                          {
                          userSkills.map((val,index)=>(
                            <div className="text-muted" key={val}>
                              {index+1} {val}
                            </div>
                          ))
                          }
                          </>
                        )
                      }
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="startedBtn mx-2" onClick={getStarted}>
                        Save
                      </button>
                      <button className="startedBtn" onClick={handleNext}>
                        Continue
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
      {
        isloading && <Loading/>
      }
    </div>
  );
};

export default Skilldesc;
