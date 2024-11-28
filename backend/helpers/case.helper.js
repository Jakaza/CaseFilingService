export async function openCase(data, Model) {
  try {
    const newUser = new Model(data);

    const savedRecord = await newUser.save();

    return {
      success: true,
      message: "Case Has Been successful Recorded",
      data: savedRecord,
    };
  } catch (error) {
    return {
      success: false,
      message: "Case Open failed",
      error: error.message,
    };
  }
}
