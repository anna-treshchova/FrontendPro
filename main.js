function askNumber () {
    for (let i = 10; i > 0; i--) {
        let number = prompt(`Please enter a number greater than 100.\n\nYou have ${i} attempts left.`);
        if (number === null) {
            alert("Operation canceled.\n\nRefresh the page to try again.")
            return
        }
        number = number.trim()

        if (number === "" || isNaN(+number)) {
            alert(`Invalid input: "${number}" is not a valid number.\n\nRefresh the page to try again.`)
            return
        }

        number = +number;
        if (number > 100) {
            alert(`Success! The number ${number} is greater than 100.`)
            return
        } else {
            alert(`The number ${number} is less than 100.\n\nPlease try again.`)
        }
        if (i === 1) {
            alert(`Unfortunately, you've run out of attempts.\n\n Your last entered number was: ${number}.`);
            return
        }
    }
}

askNumber()
