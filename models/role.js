const mongoose = require('mongoose');

var roleSchema = new mongoose.Schema({
    // RoleID: {type:Number,required:true, default: 0 },
    RoleName: { type: String, required: true },
    company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
  });
  roleSchema.plugin(autoIncrement.plugin, {
    model: "Role",
    field: "RoleID"
  });
  
module.exports = mongoose.model("Role", roleSchema);