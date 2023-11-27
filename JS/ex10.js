let spareParts = {
    wheels: 10,
    brakes: 5,
    windows: 20,
    mirrors: 7,
}

function sumParts(number) {
    for (let part in spareParts) {
      if (spareParts.hasOwnProperty(part)) {
        spareParts[part] += number;
      }
    }
  }

  console.log("Before adding: ", spareParts);
  sumParts(3); 
  console.log("After adding: ", spareParts);