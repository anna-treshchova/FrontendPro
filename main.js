let n = Number(prompt("Enter your number"));

let isPrime = true;

if (n && Number.isInteger(n) && n > 1) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log(`Your number ${n} is a composite number because it's divisible by ${i}`);
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`Your number ${n} is a prime number.`);
    }
} else {
    console.log("Invalid input. Please enter an integer greater than 1.");
}
