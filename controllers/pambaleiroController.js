const User = require('../models/user')

module.exports={

    //add pamb 
    async store(req,res){
        const {user_logged}= req.headers
        const {target_id}= req.params

        const userLogged= await User.findById(user_logged)

        userLogged.pambaleiros.push(target_id)

        userLogged.save()

        return res.json({userLogged})

    },

    //method to list the user
    async index(req,res){
        const {target_id}=req.params
        const {user_logged}=req.headers

        const userLogged= await User.findById(user_logged) 
        //List a profile
        let userListed;

        switch(target_id){
            //In case of admin of the site to list all the users
            case '!*':
                //verify if the user is an admin
                if(userLogged.admin){
                    userListed=await User.find()
                } 
                else{
                    return res.status(404).json({sms:"not Found"});
                } 
                break;
            //In case of an common user list all his friends
            case '*':
                //using find to filter the users 
                userListed= await User.find({
                    //$and means that must respect all the conditions
                    $and:[
                        //_id must not equal to the user_logged id 
                        {_id:{$ne:user_logged}},
                        //_id Must be in array of userLogged.pambaleiros
                        {_id:{$in:userLogged.pambaleiros}}
                    ]
                });
                break;
            //In case of an other target 
            default:
                userListed= await User.findById({_id:target_id})
        }
        
        return res.json({userListed})
    },
}