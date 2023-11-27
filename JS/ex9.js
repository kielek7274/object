let fruits = {
    name: "",
    kg: 0,
  
    sell: function() {
      console.log(`Sell ${this.kg} kg of ${this.name}`);
      return this;
    },
  
    buy: function() {
      console.log(`Buy ${this.kg} kg of ${this.name}`);
      return this;
    },
  
    outOfStockDate: function() {
      console.log(`${this.name} is currently out of stock.`);
      return this;
    },
  
    buyingDate: function() {
      console.log(`No buying date available for ${this.name}`);
      return this;
    }
  };

  fruits.name = "Naranja";
  fruits.kg = 5;
  
  fruits.buy().sell().outOfStockDate().buyingDate();
  