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
        return "No friends listed";
      },
      getMate: function() {
        return "no mates listed."
      }
    };
  }
  
let usuario1 = createUser("Logan Lopez", "21st Canadian Street", {height: 180, weight: 85, age: 25});
  
let usuario2 = createUser("Sarah Thorne", "Wolffe's Street", {height: 165, weight: 55, age: 24})
// my attempt at making the code slightly shorter.
console.log("User 1 name:", usuario1.getName() + ", " + "user 1 Aadress:", usuario1.getAddress() + ", " + "user 1 body dimensions:", usuario1.getBodyDimensions());
console.log("User 1 friends:", usuario1.getFriends() + ", " + "user 1 Mate:", usuario1.getMate());

console.log("User 2 name:", usuario2.getName() + ", " + "user 2 address:", usuario2.getAddress() + ", " + "user 2 body dimensions:", usuario2.getBodyDimensions());
console.log("User 2 friends:", usuario2.getFriends() + ", " + "user 2 mate:", usuario2.getMate());
  