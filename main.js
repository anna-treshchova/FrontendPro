let number = +prompt("Enter any three-digit number");
if (isNaN(number)) {
    console.log("Please use digits for input")
} else if (number < 100 || number >= 1000) {
    console.log("Please enter a three-digit number");
} else {
    let d1 = Math.floor(number / 100);
    let d2 =Math.floor(number % 100 / 10);
    let d3 = number % 10;
    console.log(`${d1} ${d2} ${d3}`)

    if (d1 === d2 && d2 === d3) {
        console.log("All digits are equal")
    } else if (d1 === d2 || d1 === d3 || d2 === d3) {
        if (d1 === d2) {
            console.log("1st and 2nd digits are equal")
        } else if (d1 === d3) {
            console.log("1st and 3rd digits are equal")
        } else if (d2 === d3) {
            console.log("2nd and 3rd digits are equal")
        }
    } else {
        console.log("There are no equal digits")
    }
}
