const mongoose=require('mongoose')
const Schema = mongoose.Schema

const formSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    month:{
        type: String,
        require: true
    },
    time:{
        type: String,
        require: true
    }

})

module.exports = mongoose.model("Entries",formSchema)