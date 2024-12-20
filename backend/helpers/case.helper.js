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
export function generatedCaseNumber() {
  const year = new Date().getFullYear().toString().slice(-2); 

  const month = String(new Date().getMonth() + 1).padStart(2, '0');
  const day = String(new Date().getDate()).padStart(2, '0'); 

  const generateUniqueCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  const caseNumber = `${year}${month}${day}-${generateUniqueCode()}`;
  return caseNumber;
}


export async function requestCloseCase(closeReasonData, Case, CloseReason) {
  try {
    const existingCase = await Case.findOne({ _id: closeReasonData.caseId });

    if (!existingCase) {
      return { message: "Case not found." };
    }

    console.log(
      existingCase.citizen.toString(),
      " !== ",
      closeReasonData.citizenId
    );

    if (
      existingCase.citizen.toString() !== closeReasonData.citizenId.toString()
    ) {
      return {
        message: "You are not authorized to request closure for this case.",
      };
    }

    // Mark the case as closure requested
    existingCase.closureRequested = true;
    await existingCase.save();

    // Save the reason for closure request
    const closeReason = new CloseReason(closeReasonData);

    await closeReason.save();

    return {
      message: "Closure request sent successfully. Awaiting admin approval.",
      case: existingCase,
      closeReason,
    };
  } catch (error) {
    console.error(error);
    return { message: "Failed to request closure for the case.", error };
  }
}
