function usingObjectValues(frutas) {
    const values = Object.values(frutas);
  
    if (values.length === 0) {
    }
  
    return values.reduce((total, kg) => total + kg, 0);
  }
  


  let frutas={
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
   }


  let totalKg1 = usingObjectValues(frutas);
  console.log("Total kilograms using Object.values:", totalKg1);


  function usingForOf(frutas) {
    let total = 0;
  
    for (const kg of Object.values(frutas)) {
      total += kg;
    }
  
    return total;
  }
  
  let totalKg2 = usingForOf(frutas);
  console.log("Total kilograms using for...of:", totalKg2);
  