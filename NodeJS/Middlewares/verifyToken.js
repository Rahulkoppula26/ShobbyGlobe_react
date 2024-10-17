import userModel from "../Model/user-model.js"
import jwt from "jsonwebtoken";
export function verifyToken(req, res, next) {
  if (
    req.headers &&
    req.headers.authorisation &&
    req.headers.authorisation.split(" ")[0] === "JWT"
  ) {
    jwt.verify(req.headers.authorisation.split(" ")[1],"secretkey", function(err,verifiedToken){
        if(err){
            res.status(400).json({message : "error message invalid tokens"})
        }
        userModel.findById(verifiedToken.id).then(user =>{
            req.user = user;
            next();
        }).catch(err => res.status(500).json({Message : err.Message}))
    })
  }else {
    res.status(403).json({message : "error message invalid tokens"})
  }
}
