let frutas1={
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
   }

function getTotal(frutas1) {
    let totalPerFruit = {};
  
    for (const [fruit, kg] of Object.entries(frutas1)) {
      const fruitName = fruit.split(' ')[0]; 
      totalPerFruit[fruitName] = (totalPerFruit[fruitName] || 0) + kg;
    }
  
    return totalPerFruit;
  }
  
  let totalPerFruit = getTotal(frutas1);
  console.log("Total kilograms per fruit:", totalPerFruit);
  
  