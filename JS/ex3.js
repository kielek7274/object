function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let obj = {
    age: 30,
    salary: 2000,
    count: 2
};

multiplyNumeric(obj);
console.log(obj)