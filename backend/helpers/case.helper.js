
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
export async function viewCases(userId , Case) {
  try {
    const existingCase = await Case.find({ citizen: userId });
    console.log(userId);
    console.log(existingCase);
    
    if (!existingCase) {
      return { message: "Case not found." };
    }

    console.log(existingCase);
    

    const cases = existingCase.map(item => {
      return {
        [item.caseNumber]: {
                caseId : item._id,
                caseTitle : item.caseTitle,
                caseDescription : item.caseDescription,
                caseType : item.caseType,
                citizen :   item.citizen,
                language : item.language,
                policeStation : item.policeStation,
                township : item.township,
                province : item.province,
                caseNumber : item.caseNumber,
                status: item.status,
                closureRequested: item.closureRequested,
                caseDate: formatMongoDate(item.caseDate),
                isOfficerAssigned: checkIfOfficerIsAssigned(item.assignedOfficer)
        }
      }
    })

    console.log(cases);
    

    return {
      message: "successfully fetched Case For User",
      cases: cases,
    };

  } catch (error) {
    console.error(error);
    return { message: "Failed to request closure for the case.", error };
  }
}

function checkIfOfficerIsAssigned(officer){
  if(officer == null){
    return false
  }
  return true
}

function formatMongoDate(mongoDate){
  const date = new Date(mongoDate);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}`
}