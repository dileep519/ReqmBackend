const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    organizationName:{
        type:String,
        require:true
    },
    projectName:{
        type:String,
        required:true
    },
    usersAssociated: {
        type: Array,
        required: true
    },
    userStory: {
        userId: [String],
        storyDetails: {
            storyTitle: {
                type: String
            },
            asA: {
                type: String
            },
            actionRequirement: {
                type: String
            },
            actionOutput: {
                type: String
            },
            actionAssignedTo: {
                type: String
            },
            actionProvidedBy: {
                type: String
            },
            actionReceivedMode: {
                type: String
            },
            priority: {
                type: Number
            }
        }
    }
});

module.exports=mongoose.model('Project',projectSchema);