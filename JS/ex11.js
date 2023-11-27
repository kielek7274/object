function createUser(name, address, bodyDimensions){
    return {
        name: name,
        address: address,
        bodyDimensions: bodyDimensions
    }
};

let usario1 = {
    name: "John",
    address: "Wolf Street",
    bodyDimensions: "really tall and thin"
};

let usario2 = Object.assign(usario1)
console.log(usario1)
console.log(usario2)