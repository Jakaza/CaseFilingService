import mongoose from "mongoose";

const closeReasonSchema = new mongoose.Schema({
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Case",
    required: true,
  },
  citizenId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Citizen",
    required: true,
  },
  reason: {
    type: String,
    required: true,
    trim: true,
  },
  additionalComments: {
    type: String,
    trim: true,
  },
  dateSubmitted: {
    type: Date,
    default: Date.now,
  },
});

const CloseReason = mongoose.model("CloseReason", closeReasonSchema);
export default CloseReason;
