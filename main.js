const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-btn");

let hasError = false;

function showFormError(selectorName, errorMessage) {
    document.querySelector(`#error-${selectorName}`).textContent = errorMessage;
    hasError = true;
}

function hideFormError(selectorName) {
    document.querySelector(`#error-${selectorName}`).textContent = "";
}

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    hasError = false;

    const formData = new FormData(e.target);

    const name = formData.get("name").trim();
    const phone = formData.get("phone").trim();
    const email = formData.get("email").trim();

    if (!name) {
        showFormError("name", "Name is required");
    } else if (!/^[A-Za-zА-Яа-яІіЇїЄєҐґ][A-Za-zА-Яа-яІіЇїЄєҐґ\s\-]+$/.test(name)) {
        showFormError("name", "Name is invalid");
    } else {
        hideFormError("name");
    }

    if (!phone) {
        showFormError("phone", "Phone number is required");
    } else if (!/^\+380/.test(phone)) {
        showFormError("phone", "Phone number must start with +380");
    } else if (!/^\+380\d{9}$/.test(phone)) {
        showFormError("phone", "Phone number is invalid");
    } else {
        hideFormError("phone");
    }

    if (!email) {
        showFormError("email", "Email is required");
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        showFormError("email", "Email is invalid");
    } else {
        hideFormError("email");
    }

    if (!hasError) {
        submitButton.disabled = true;
        console.log("Sending data to the server:")
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }
})
