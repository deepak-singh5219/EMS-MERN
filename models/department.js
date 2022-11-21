const mongoose = require('mongoose');

var departmentSchema = new mongoose.Schema({
    DepartmentName: { type: String, required: true },
    company: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }]
  });
  departmentSchema.plugin(autoIncrement.plugin, {
    model: "Department",
    field: "DepartmentID"
  });
  
  module.exports = mongoose.model("Department", departmentSchema);