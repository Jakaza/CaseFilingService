import mongoose from "mongoose";

var caseSchema = new mongoose.Schema({
  caseTitle: {
    type: String,
    required: true,
    trim: true,
  },
  caseNumber : {
    type: String,
    required: true,
  },
  caseDescription: {
    type: String,
    required: true,
    trim: true,
  },
  caseType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Open", "In Progress", "Closed"],
    default: "Open",
  },
  caseDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  citizen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Citizen",
    required: true,
  },
  assignedOfficer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Officer",
  },
  officerComments: {
    type: String,
    trim: true,
  },
  courtDetails: {
    type: String,
    trim: true,
  },
    language: {
      type: String,
      required: true,
      default: "English"
    },
    province: {
      type: String,
      required: true,
    },
    township: {
      type: String,
      required: true,
    },
    policeStation: {
      type: String,
      required: true,
    },
  caseDocuments: [
    {
      documentUrl: {
        type: String,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
    },
  ],
  isClosed: {
    type: Boolean,
    default: false,
  },
  closureRequested: {
    type: Boolean,
    default: false,
  },
  closureApproval: {
    type: Boolean,
    default: false, // Admin/Supervisor approval will be set here
  },
});

const Case = mongoose.model("Case", caseSchema);

export default Case;
