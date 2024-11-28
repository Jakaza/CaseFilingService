export default async function register(data, Model) {
    try {
      const newUser = new Model(data);
  
      const savedRecord = await newUser.save();
  
      return {
        success: true,
        message: 'Registration successful',
        data: savedRecord,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Registration failed',
        error: error.message,
      };
    }
}
  