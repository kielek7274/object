let user = [
    {}
];

user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

console.log(user)
