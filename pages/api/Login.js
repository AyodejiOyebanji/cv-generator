import handlerConnection from "../../Mongoose";
import { UserModel } from "../../Mongoose/Model";
import { compare } from "bcrypt";
import { sign} from "jsonwebtoken"

export default function handler(req, res) {
  if (req.method == "POST") {
    UserModel.findOne({ email: req.body.email })
      .then(async (val) => {
        if (val) {
            let same= await compare(req.body.password,val.password)
            if(same){
                let token =await sign({id:val._id},process.env.JSWT)
                res.send({
                    token,
                    status:true 
                })
            }else{
                res.send({ message: "password not correct", status: false });
            }

        } else {
            res.send({ message: "Email not correct", status: false });
        }
      })
      .catch((err) => {
        console.log(err.message)
        res.send({ message: "Something went wrong", status: false });
      });
  }
  handlerConnection();
}
