const project_router = require('express').Router();
const Project = require('../model/Project');

project_router.post('/add-project', async(req,res)=>{
    const project = new Project({
        organizationName:req.body.organization_name,
        projectName:req.body.project_name,
        usersAssociated:req.body.associated_users_list
    });
    try{
        const saveProject = await project.save();
        res.status(200).send({
            error:"",
            message:"Project created Successfully"
        });
    }
    catch(err){
        res.status(500).send({error: "Internal server error" + err});
    }
});

project_router.post('/get-project-summary', async(req, res) => {
    
});

module.exports = project_router;