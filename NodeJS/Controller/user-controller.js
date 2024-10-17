import bcrypt from "bcrypt"
import userModel from "../Model/user-model.js";
import jwt from "jsonwebtoken"
export function register(req,res){
    const {username,email,password} = req.body;
    
    userModel.findOne({email}).then(data => {
        if(data){
            return res.status(400).json({user : "user already exist"})
        }else {
            const newUser = new userModel({
                username,
                email,
                password:bcrypt.hashSync(password,10),
            });
            newUser.save().then(data =>{
                res.status(200).json({message : data})
            })
        }
    }).catch(err => res.status(500).json({Message : err.Message}))
}
export function login(req,res){
    const {email,password} = req.body;
    userModel.findOne({email}).then(data => {
        if(!data){
            return res.status(400).json({user : "user not register"})
        }
        let isValidPassword = bcrypt.compareSync(password,data.password);
        if(!isValidPassword){
            return res.status(403).json({meassage : "Invalid password"})
        }
        const token = jwt.sign({_id: data._id},"secretkey",{expiresIn:"100m"});
        res.send({
            user:{
                email:data.email,
                username:data.username,
            },
            accessToken:token,
        });
    }).catch(err => res.status(500).json({Message : err.Message}))
}