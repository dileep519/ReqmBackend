const router = require('express').Router();
const UserStory = require('../model/UserStory');

router.post('/add-story', async(req,res)=>{
    const story = new UserStory({
        userId: req.body.user_id,
        storyDetails: {
            storyTitle: req.body.story_details.story_title,
            asA: req.body.story_details.as_a,
            actionRequirement: req.body.story_details.action_requirement,
            actionOutput: req.body.story_details.action_output,
            actionAssignedTo: req.body.story_details.action_assigned_to,
            actionProvidedBy: req.body.story_details.action_provided_by,
            actionReceivedMode: req.body.story_details.action_received_mode,
            priority: req.body.story_details.priority
        }
    });
    console.log(req.body);
    try{
        const saveStory = await story.save();
        res.status(200).send({
            error:"",
            message:"Story added successfully"
        });
    }
    catch(err){
        res.status(500).send({error: "Internal server error " + err});
    }
});


module.exports = router;