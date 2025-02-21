alert("Hello! Please answer the following three questions. It will help us make your experience on this website easier.");
let userName = prompt("What is your name?");
let userEmail = prompt("What is your email?");
let userLocation = prompt("Which country (or state) and city are you from?");
let answer= `We’re happy to welcome you here, ${userName}! Also, we must inform you that this email - ${userEmail} - will be used for further communication, so please remember to check it. We will be contacting you according to the ${userLocation } time zone. Thank you!`;
alert(answer);
