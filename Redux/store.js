import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import CreateCv from "./index"
import current from "./currentUserState"
import education from "./education";

export default configureStore({
    reducer:{
        details:UserSlice,
        moreDetails:CreateCv,
        currentUser:current,
        education:education
    }
})