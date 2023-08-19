import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
    username  : {
        type : String,
        required : true
    },
    useremail  : {
        type : String,
        required : true
    },
    usernumber  : {
        type : String,
        required : true
    },
    usermessage  : {
        type : String,
        required : true
    }
},
{
    timestamp:true
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default Contact