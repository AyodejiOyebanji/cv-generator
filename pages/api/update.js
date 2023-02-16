import handlerConnection from "../../Mongoose";
import { UserModel } from "../../Mongoose/Model";
import { verify } from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try{
      let val= await verify(req.body.token, process.env.JSWT)
      let $set={};
      $set[`${req.body.name}`]=req.body.value
        UserModel.findOneAndUpdate({ _id: val.id },$set)
          .then(async (val) => {
              res.send({
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
