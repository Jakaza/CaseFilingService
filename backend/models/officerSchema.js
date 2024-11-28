import mongoose from 'mongoose'; 

var officerSchema = new mongoose.Schema({
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
  phone: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
    enum: ['Junior', 'Senior', 'Lead'],  
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
});


const Officer = mongoose.model('Officer', officerSchema);

export default Officer;
