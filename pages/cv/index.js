import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useCookies } from "react-cookie";
import useCheckIFAddSomeDetails from "../../customHook/useCheckIFAddSomeDetails"
import useCheckUser from "../../customHook/useCheckUser"
function Cv() {
  let router = useRouter();
  const [cookies,setCookies]=useCookies(["userToken"])
  const [user]=useCheckUser(cookies?.userToken);
  const []=useCheckIFAddSomeDetails(user)
  const [image, setImage] = useState("")
  console.log(user)
  useEffect(() => {
    let getAllUser = localStorage['CvImage']
      ? JSON.parse(localStorage['CvImage'])
      : [];
      setImage( getAllUser)
  }, []);
  console.log(image)
  

  return (
    <div className="body">
      <div className="cv container shadow">
        <div className="left_side">
          <div className="profileText">
            <div className="imageBox">
              <Image src={image} alt="" width="400" height="350" />
            </div>
            <h2>
              {user?.fullname} <br /> <span>{user?.worksector
}</span>{' '}
            </h2>
          </div>
          <div className="contactInfo">
            <h3 className="title">Contact Info</h3>
            <ul>
              <li>
                <span className="icon">
                  <span class="material-symbols-outlined">phone_enabled</span>
                </span>
                <span className="text">{user?.phone}</span>
              </li>
              <li>
                <span className="icon">
                  <span class="material-symbols-outlined">mail</span>
                </span>
                <span className="text">{user?.email}</span>
              </li>
              <li>
                <span className="icon">
                  <span class="material-symbols-outlined">public</span>
                </span>
                <span className="text">www.mywebsite.com</span>
              </li>
              <li>
                <span className="icon">
                  <span class="material-symbols-outlined">home</span>
                </span>
                <span className="text">{user?.address}, {user?.city}, {user?.country}</span>
              </li>
              <li>
                <span className="icon"></span>
                <span className="text"></span>
              </li>
            
            </ul>
          </div>

          <div className="contactInfo education">
            <h3 className="title">Education</h3>
            {user?.educationDetail.map((val)=>(
              <ul>
                 <h5>{val.graduationYear}</h5>
               <h4 class="text-light">{val.degree
} in {val.fieldOfStudy}</h4>
               <h4>{val.schoolName}</h4>
              </ul>

            ))}
            


          </div>
          
          <div className="contactInfo language">
            <h3 className="title">Language</h3>
            <ul>
              <li>
                <span className="text">English</span>
                <span className="percent">
            
                </span>
              </li>
             
              <li>
                <span className="text">Spanish</span>
                <span className="percent"></span>
              </li>
             
             
            </ul>
          </div>

        </div>
        <div className="right_side">
          <div className="about">
            <h2 className="title_two">Profile</h2>
            <p>{user?.profSum}</p>
          </div>
          <div className="about">
            <h2 className="title_two">Experience</h2>
            <div boxclassName="box">
              {
                user?.jobDetails.map((val)=>(
              <div className="year_company">
                <h5>{val.startYear} - {val.endYear}</h5>
                <h5>{val.employer
}, {val.city}, {val.state}</h5>
            <div className="">
              <p>{val?.desc.desc}</p>
              <p>{val?.desc.desc1}</p>
              <p>  {val?.desc.desc2}</p>
              <p>  {val?.desc.desc3}</p>
              <p> {val?.desc.desc4}</p>
              
              
            
            
             


            </div>

              </div>
             
             

                ))

              }

              
            </div>

          </div>
        <div  className="skills">
          <h2 className="title2">Professional Skills</h2>
          {user?.skills.map((val)=>(
          <div className="box">
          <h4>{val}</h4>
          <div className="percent">
          <div ></div>
      </div>

            
          </div>
             ))
}
           
           
          
         
          
          <div className="box">
            <h4>html</h4>
            <div className="percent">
                <div ></div>
            </div>

          </div>
        </div>
        <div class="interest ">
        <h2 className="title2">Interest</h2>
        
{
  user?.skills.map((val)=>(
  <ul>
       <li className="text-muted"> <h5>{val}</h5> </li>
  </ul>
  ))
}
       


        
        </div>
          
        </div>

      </div>
    </div>
  );
}

export default Cv;
