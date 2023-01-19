require('dotenv').config()
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;


const authentication = async (req, res, next) => {

    try {
        const token = req.headers.authorization;
        
        const decoded = jwt.verify(token,JWT_SECRET_KEY)
       if(decoded){
        req.body.userID = decoded.userID;
        next()
       }
       else return res.status(400).json({message : "login frist"})
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
}

module.exports = authentication;