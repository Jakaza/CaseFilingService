import mongoose from "mongoose";

var reportSchema = new mongoose.Schema({
  reportType: {
    type: String,
    required: true,
    trim: true,
  },
  reportNumber : {
    type: String,
    required: true,
  },
  reportDescription: {
    type: String,
    required: true,
    trim: true,
  },
  reportDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  citizen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Citizen",
    required: true,
  },
  isClosed: {
    type: Boolean,
    default: false,
  }
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
