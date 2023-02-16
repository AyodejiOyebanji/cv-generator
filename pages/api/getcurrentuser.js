import handlerConnection from "../../Mongoose";
import { UserModel } from "../../Mongoose/Model";
import { verify } from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method == "GET") {
    try{
      let val= await verify(req.query.token, process.env.JSWT)
        UserModel.findOne({ _id: val.id })
          .then(async (val) => {
              res.send({
                  user:val,
                  status:true
              })
          })
          .catch((err) => {
            console.log(err.message);
            res.send({ message: "Something went wrong", status: false });
          });
    }catch(err){
      console.log(err.message);
      res.send({ message: "invalid token", status: false });
    }
  }
  handlerConnection();
}
