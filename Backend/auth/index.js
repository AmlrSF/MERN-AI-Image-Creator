const jwt = require('jsonwebtoken');
require('dotenv').config();

const authorize = (req, res, next) => {
    const token = req.body.token

    if(!token) return res.status(400).send({
        "errors": [
                {
                    "type": "token",
                    "value":'no access token',
                    "msg": "invalid token",
                }
        ]
    })

    let {secretKey} = process.env;
    
    try {
        const user =  jwt.verify(token,secretKey,(err,res)=>{
            if(err) return  console.log(err);
            // console.log(res);
            req.id = res.id;
            
            next();
        });
        // console.log(user);
       
    } catch (error) {
        console.log(error);;   
    }
};

module.exports = {
  authorize
};
