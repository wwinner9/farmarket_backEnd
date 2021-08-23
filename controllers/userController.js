const User = require('../models/user')

module.exports={

    async store(req,res){

        //Get the body values 
        const {name,email,avatar,address,username,password}= req.body

        const userExist= await User.findOne({username})

        if(userExist)
            return res.json({userExist})
            
        const newUser= await User.create({
            name,
            avatar,
            email,
            address,
            username, 
            password
        })
        
        return res.json({newUser})
    }   
}