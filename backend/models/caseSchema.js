import mongoose from 'mongoose'; 

var caseSchema = new mongoose.Schema({
  caseTitle: {
    type: String,
    required: true,
    trim: true,
  },
  caseDescription: {
    type: String,
    required: true,
    trim: true,
  },
  caseType: {
    type: String,
    required: true,
    enum: ['Criminal', 'Civil', 'Family', 'Other'], 
  },
  status: {
    type: String,
    required: true,
    enum: ['Open', 'In Progress', 'Closed'], 
    default: 'Open',
  },
  caseDate: {
    type: Date,
    required: true,
    default: Date.now, 
  },
  citizen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Citizen',     
    required: true,
  },
  assignedOfficer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Officer', 
  },
  officerComments: {
    type: String,
    trim: true,
  },
  courtDetails: {
    type: String,
    trim: true,
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
});

const Case = mongoose.model('Case', caseSchema);

export default Case;
