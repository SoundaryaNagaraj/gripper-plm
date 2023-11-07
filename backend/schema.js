const mongoose = require('mongoose');

const GripperDataSchema = new mongoose.Schema({
  Property: String,
  Value: String,
});

const GripperSchema = new mongoose.Schema({
  "Model Name": String,
  Data: [GripperDataSchema],
});

const Gripper = mongoose.model('Gripper', GripperSchema);

module.exports = Gripper;
