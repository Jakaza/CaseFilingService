import mongoose from 'mongoose';

const passwordResetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'userType', // Dynamic reference to Citizen or Officer
  },
  userType: {
    type: String,
    required: true,
    enum: ['Citizen', 'Officer'], // Allowed models
  },
  resetToken: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const PasswordReset = mongoose.model('PasswordReset', passwordResetSchema);
export default PasswordReset;
