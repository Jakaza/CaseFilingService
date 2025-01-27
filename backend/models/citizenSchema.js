import mongoose from 'mongoose'; 

var citizenSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
      },
    surname: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      contact: {
        type: String,
        required: true,
      },
      identity: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true
      },
      dateJoined: {
        type: Date,
        default: Date.now,
      },
      complaintCount: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
      }, 
      lastComplaintDate: {
        type: Date,
        default: null
      }, 
      createdCases: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Case', 
        },
      ],
    });
    
const Citizen = mongoose.model('Citizen', citizenSchema);
export default Citizen;