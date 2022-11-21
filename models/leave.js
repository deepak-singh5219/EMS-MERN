const mongoose = require('mongoose');

var leaveApplicationSchema = new mongoose.Schema({
    Leavetype: { type: String, required: true },
    FromDate: { type: Date, required: true },
    ToDate: { type: Date, required: true },
    Reasonforleave: { type: String, required: true },
    Status: { type: String, required: true },
    employee: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }]
  });
  leaveApplicationSchema.plugin(autoIncrement.plugin, {
    model: "LeaveApplication",
    field: "LeaveApplicationID"
  });
  
 module.exports = mongoose.model(
    "LeaveApplication",
    leaveApplicationSchema
  );