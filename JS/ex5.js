let calculator = {
    read: function(){
        this.a = Number(prompt("Insert number a"))
        this.b = Number(prompt("Insert number b"));
    },
    sum: function(){
    return this.a + this.b;
},
    mul: function(){
    return this.a * this.b;
    },

}
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul()) 


