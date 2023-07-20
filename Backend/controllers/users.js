const user = require('../schema/users');
const {validationResult}  = require('express-validator');
const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async(req,res)=>{
    let {password,username,email,date} = req.body;    
    
    try {
        const validatorsResultErorrs = validationResult(req);
        if(!validatorsResultErorrs.isEmpty()){
            return res.status(400).json({
                success:false,
                errors : validatorsResultErorrs.array()
            })
        }

        const userExist = await user.findOne({email});
        if(userExist){
            return res.status(400).send({
                "errors": [
                        {
                            "type": "email",
                            "value":email,
                            "msg": "this user already exists",
                        }
                ]
                
            })
        }

        const saltRounds = 10;
        const hashedpass = await bycrpt.hash(password, saltRounds);

        const servedUser = await user.create({
            username,
            email,
            password:hashedpass,
            date
        })

        res.json({
            succes:true,user:servedUser
        })

    } catch (error) {
        res.status(500).json(
            {
                success:false,
                message:"internal server error"
            }
        );
    }
}
const Login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        let MatchUser = await user.findOne({email}); 

        if(!MatchUser) return res.status(400).send({
            "errors": [
                    {
                        "type": "email",
                        "value":email,
                        "msg": "sry, there no user by this credentials",
                    }
            ]
        })
        let matched =  await bycrpt.compare(password,MatchUser.password);
        if(!matched){
            return res.status(400).send({
                "errors": [
                        {
                            "type": "password",
                            "value":password,
                            "msg": "invalid Password",
                        }
                ]
            })
        }else{
             //genrate token 
        const token  = jwt.sign({
                id:MatchUser._id,
                username:MatchUser.username
                },
                process.env.secretKey,
                {
            expiresIn: "24h"
            
            },(err,token)=>{
                if(err)throw err;
                res.json({succes:true,user:MatchUser,token})
            })  
       }
        
    } catch (error) {
        res.status(500).json(
            {
                success:false,
                message:"internal server error"
            }
        );
    }
}

const getUser = async (req, res)=>{
    const userId = req.id;
    // console.log(userId);
    try {
        const profileUser = await user.findOne({_id:userId})
        if(!profileUser){
            return res.status(404).json({
                succes:false,
                message:"user not found",
            })
        }

        return res.status(200).send({
            succes:true,
            message:"user found",
            user:profileUser
        })
    } catch (error) {
        res.status(500).json(
            {
                success:false,
                message:"internal server error"
            }
        );
    }
}

const getSingleUser = async(req,res) =>{
    const {id} = req.params;
    try {
        const userInfo = await user.find({_id: id});
        console.log(userInfo);
        res.json({user : userInfo});

   } catch (error) {
    console.log(error);
   }
}

module.exports =  {
    register,
    Login,
    getUser,
    getSingleUser
}