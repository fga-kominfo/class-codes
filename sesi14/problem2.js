function checkVisitedSuspectCountry(travelHistory) {
  for (let i = 0; i < travelHistory.length; i++) {
    if (
      travelHistory[i] === 'China' ||
      travelHistory[i] === 'Japan' ||
      travelHistory[i] === 'Korea' ||
      travelHistory[i] === 'Singapore'
    ) {
      return true;
    }
    // for (let j = 0; j < suspectCountry.length; j++) {
    //   if (suspectCountry[j] === travelHistory[i]) {
    //     return true;
    //   }
    // }
  }

  return false;
}

const checkIsTempHigh = temperature => {
  if (temperature > 35) return true;
  return false;
};

function evaluatePassenger(passenger) {
  // if passenger has temperature above 35, and have travelled to either China, Japan, Korea or Singapore their status is Suspect
  // if passenger has temperature above 35, and never travelled to either China, Japan, Korea or Singapore their status is Sick
  // if passenger has temperature below 35, and have travelled to either China, Japan, Korea or Singapore their status is Potential Carrier
  // if passenger has temperature below 35, and never travelled to either China, Japan, Korea or Singapore their status is Healthy
  // const id = passenger.id;
  // const name = passenger.name;
  // const temperature = passenger.temperature;
  // const travelHistory = passenger.travelHistory;
  const {id, name, temperature, travelHistory} = passenger; // destructuring
  let status;
  const visitedSuspectCountry =
    checkVisitedSuspectCountry(travelHistory);
  const isTempHigh = checkIsTempHigh(temperature);

  if (isTempHigh && visitedSuspectCountry) {
    status = 'Suspect';
  } else if (isTempHigh && !visitedSuspectCountry) {
    status = 'Sick';
  } else if (!isTempHigh && visitedSuspectCountry) {
    status = 'Potential Carrier';
  } else if (!isTempHigh && !visitedSuspectCountry) {
    status = 'Healthy';
  }

  // if (temperature > 35) {
  //   if (visitedSuspectCountry) {
  //     status = 'Suspect';
  //   } else {
  //     status = 'Sick';
  //   }
  // } else {
  //   if (visitedSuspectCountry) {
  //     status = 'Potential Carrier';
  //   } else {
  //     status = 'Healthy';
  //   }
  // }

  return `${name} ${id} ${status}`;
}

const budi = {
  name: 'Budi',
  id: 50,
  temperature: 40,
  travelHistory: ['Russia', 'Japan'],
};

console.log(evaluatePassenger(budi)); // Budi 50 Suspect

const tono = {
  name: 'Tono',
  id: 10,
  temperature: 40,
  travelHistory: ['Morocco', 'France', 'Burma'],
};

console.log(evaluatePassenger(tono)); // Tono 10 Sick

const tsubasa = {
  name: 'Tsubasa',
  id: 15,
  temperature: 30,
  travelHistory: ['Brazil'],
};

console.log(evaluatePassenger(tsubasa)); // Tsubasa 15 Healthy
