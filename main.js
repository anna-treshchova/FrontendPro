function average(arr) {
    let result = 0;
    let amount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result += arr[i];
            amount += 1
        }
    }

    return amount !== 0 ? result / amount : "No numbers found in the array";
}

console.log(average([10, 20, true, 30, "Anna", 40, 10, false]));
