import handlerConnection from "../../Mongoose";
import { UserModel } from "../../Mongoose/Model";
import { hash } from "bcrypt";

export default function handler(req, res) {
  handlerConnection();
  if (req.method == "POST") {
    UserModel.findOne({ email: req.body.email })
      .then(async (val) => {
        if (val) {
          res.send({
            message: "Email Address has already been used",
            status: false,
          });
        } else {
          let encryptPassword = await hash(req.body.password, Number(process.env.SALTROUND));
          UserModel.create({ ...req.body, password: encryptPassword })
            .then((ress) => {
              res.send({
                message: "Successfuly created",
                status: true,
              });
            })
            .catch((err) => {
              res.send({ message: "Something went wrong", status: false });
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err.message)
        res.send({ message: "Something went wrong", status: false });
      });
  }
}
