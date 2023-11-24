function makeUser1() {
    return {
    name: "John",
    ref: this
    };
   }
   let user1 = makeUser1();
   alert( user1.ref.name );
   

// the return is blank - ref: this is refering to nothing, if it was "ref: this name", it'd return "John". But its reffering to nothing, therefore its also returning nothing.