const mongoose = require ("mongoose")

const Schema = mongoose.Schema

const RegSchema = new Schema ({
    
    firstName: { type: String },
    lastName: { type: String},
    dob: {type: String},
    skillLevel: {type: Number},
    parent: {type: String},
    cell: {type: String},
    email: {type: String},
    interest: {type: Boolean},
    eContactCell: {type: String},
    eContactName: {type: String},
    eContactRel: {type: String},
    release: {type: Boolean},

})

const Reg = mongoose.model("regs", RegSchema)

module.exports = Reg