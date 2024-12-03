import Citizen from "../models/citizenSchema.js";


export const updateUserDetails = async (req, res) => {
  const { userid } = req.body; 
  const updateData = req.body;

  try {
    const updatedUser = await Citizen.findByIdAndUpdate(
      userid, 
      updateData, 
      { new: true, runValidators: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'User details updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
