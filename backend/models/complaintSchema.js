import mongoose from "mongoose";

var complaintSchema = new mongoose.Schema({
    complaintType: {
    type: String,
    required: true,
    trim: true,
  },
  complaintNumber : {
    type: String,
    required: true,
  },
  complaintDescription: {
    type: String,
    required: true,
    trim: true,
  },
  complaintDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  citizen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Citizen",
    required: true,
  },
  isAnonymous: {
    type: Boolean,
    required: true,
    default: false,
  },
  isClosed: {
    type: Boolean,
    default: false,
  }
});

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;
