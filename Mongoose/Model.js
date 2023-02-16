import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  workExpType: {
    type: String,
    required: true,
  },
  worksector: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  jobDetails:[],
  educationDetail:[],
  skills:[],
  profSum:{
    type:String,
    default:"",
  },
  image:{
    type:String,
    required:true,
    
  }
});

export const UserModel=mongoose.models.users_tb||mongoose.model("users_tb",UserSchema)