function createSum () {
    let sum = 0;
    return function (number) {
        return sum += number;
    }
}

let sum = createSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));
