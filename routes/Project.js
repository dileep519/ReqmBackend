const router = require('express').Router();
const Project = require('../model/Project');
var ObjectID = require('mongodb').ObjectID;

router.post('/add-project', async(req,res)=>{
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

router.get('/get-project-summary/:id', async (req, res) => {

    const id = req.params.id;
    try {
        Project.findOne({_id: new ObjectID(id)}, async (err, result) => {
            try {
                if(err) {
                    res.send("Some error occured");
                }
                else {
                    res.json(result);
                }
            }
            catch(error) {
                console.log(error);
                res.status(500).send({'error': error});
            }
        });    
    }
    catch(err) {
        res.status(500).send({error: "Internal server error " + err});
    }
});

module.exports = router;