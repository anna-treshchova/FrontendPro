let birthYear = +prompt("Please enter your birth year");
let city = prompt("Your current city");
let sport = prompt("Your favorite sport");

let currentYear = 2025;

if (birthYear && !isNaN(birthYear)) {
    console.log(`You're already ${currentYear - birthYear} or you'll be turning ${currentYear - birthYear} this year`);
} else {
    console.log("It's a pity that you didn't want to enter your year of birth :(");
}

if (city) {
    switch (city) {
        case "Kyiv":
            console.log("You live in the capital of Ukraine");
            break;
        case "London":
            console.log("You live in the capital of the United Kingdom");
            break;
        case "Washington":
            console.log("You live in the capital of the United States");
            break;
        default:
            console.log(`You live in city - ${city}`)
    }
} else {
    console.log("It's a pity that you didn't want to enter your city :(");
}


if (sport) {
    switch (sport) {
        case "basketball":
            console.log("Cool! Do you want to be like Michael Jordan?");
            break;
        case "football":
            console.log("Cool! Do you want to be like Lionel Messi?");
            break;
        case "boxing":
            console.log("Cool! Do you want to be like Mike Tyson?");
            break;
        default:
            console.log(`Cool, ${sport} as such an interesting sport`);
    }
} else {
    console.log("It's a pity that you didn't want to enter your favorite sport :(");
}
