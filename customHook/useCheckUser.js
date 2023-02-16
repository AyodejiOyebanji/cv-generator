import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {addCurrent} from "../Redux/currentUserState"
import {useSelector,useDispatch} from "react-redux"

const useCheckUser = (token) => {
  let router = useRouter();
  const {currentUser} =useSelector((state)=>state.currentUser)
  const dispatch=useDispatch()
  const [user, setUser] = React.useState(undefined);
  useEffect(() => {
    checkTokenAndFetchUser();
  }, []);

  const checkTokenAndFetchUser = () => {
    if (!token) {
      router.push("/Login");
    }else if(currentUser){
      setUser(currentUser)
    }  
    else {
      axios.get(`/api/getcurrentuser/?token=${token}`).then((res) => {
        if (res.data.message == "invalid token" && !res.data.status) {
          router.push("/Login");
        } else if (res.data.user && res.data.status) {
          setUser(res.data.user);
          dispatch(addCurrent(res.data.user))
        }
      });
    }
  };
  return([user])
};

export default  useCheckUser