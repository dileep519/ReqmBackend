const router=require('express').Router();
const User=require('../model/User');

router.post('/register', async(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        profilePhoto:req.body.profilePhoto
    });
    try{
        User.findOne({email:req.body.email},async (err,result)=>{
            if(err){
                res.status(200).send({
                    error:"An Error Occured Please try after sometime",
                    message:""
                })
            }
            if(!result){
                const savedUser=await user.save();
                res.status(201).send({
                    error:"",
                    message:"User created Successfully"
                });
            }else{
                res.status(200).send({
                    error:"Email Taken",
                    message:"" 
                })
            }
        })
    }catch(err){
        res.status(200).send(err);
    }
    });

module.exports=router;