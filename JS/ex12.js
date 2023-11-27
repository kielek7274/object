function createUser(name, address, bodyDimensions) {
    return {
      info: {
        name: name,
        address: address,
        bodyDimensions: bodyDimensions
      },
      getName: function() {
        return this.info.name;
      },
      getAddress: function() {
        return this.info.address;
      },
      getBodyDimensions: function() {
        return this.info.bodyDimensions;
      },
      getFriends: function() {
        return "No friends listed.";
      },
      getMate: function() {
        return "No mates listed."
      }
    };
  }
  
let usuario1 = createUser("John Doe", "123 Main St", {height: 180, weight: 75, age: 30});
  
let usuario2 = createUser("Mary Jane", "321 Wolf Street", {height: 156, weight: 55, age: 24})
// my attempt at making the code slightly shorter.
console.log("User 1 Name:", usuario1.getName() + ", " + "User 1 Address:", usuario1.getAddress() + ", " + "User 1 Body Dimensions:", usuario1.getBodyDimensions());
console.log("User 1 Friends:", usuario1.getFriends());
console.log("User 1 Mate:", usuario1.getMate());

console.log("User 2 Name:", usuario2.getName() + ", " + "User 2 Address:", usuario2.getAddress() + ", " + "User 2 Body Dimensions:", usuario2.getBodyDimensions());
console.log("User 2 Friends:", usuario2.getFriends());
console.log("User 2 Mate:", usuario2.getMate()); 
  