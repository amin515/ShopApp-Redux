
import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
    name : {
        type : String,
        unique : true,
        trim : true,
    
    },

    slug : {
        type : String,
        unique : true,
        trim : true,
       
    },

    photo : {
        type : String,
        default : null,
        trim : true
    },
    trash : {
        type : Boolean,
        default : false

    },

    status : {
        type : Boolean,
        default : true
    }

}, {
    timestamps : true
})

// export 

export default mongoose.model('brands', brandSchema)