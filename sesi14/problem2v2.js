function checkTravelHistory(travelHistory) {
  for (let i = 0; i < travelHistory.length; i++) {
    const country = travelHistory[i];
    if (
      country === 'China' ||
      country === 'Japan' ||
      country === 'Korea' ||
      country === 'Singapore'
    ) {
      return true;
    }
  }
  return false;
}

function evaluatePassenger(passenger) {
  // if passenger has temperature above 35, and have travelled to either China, Japan, Korea or Singapore their status is Suspect
  // if passenger has temperature above 35, and never travelled to either China, Japan, Korea or Singapore their status is Sick
  // if passenger has temperature below 35, and have travelled to either China, Japan, Korea or Singapore their status is Potential Carrier
  // if passenger has temperature below 35, and never travelled to either China, Japan, Korea or Singapore their status is Healthy
  const {name, id, temperature, travelHistory} = passenger;
  const visitedSuspectCountry =
    checkTravelHistory(travelHistory);
  let status = '';
  if (temperature >= 35 && visitedSuspectCountry) {
    // console.log(name, temperature, 'high');
    status = 'Suspect';
  } else if (temperature >= 35 && !visitedSuspectCountry) {
    status = 'Sick';
  } else if (temperature <= 35 && visitedSuspectCountry) {
    status = 'Potential Carrier';
  } else if (temperature <= 35 && !visitedSuspectCountry) {
    status = 'Healthy';
  }

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
