const phoneBook = {
    contacts: [
        {name: "Anna", phone: "+380 661 1111", email: "anna@email.com"},
        {name: "Kate", phone: "+380 662 2222", email: "kate@email.com"},
        {name: "John", phone: "+380 663 3333", email: "john@email.com"}
    ],

    findContact(name) {
        let found = false;
        this.contacts.forEach(contact => {
            if(contact.name === name) {
                console.log(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}\n`);
                found = true;
            }
        })
        if (!found) {
            console.log(`Contact ${name} is not found. Use addContact to add it.\n`);
        }
    },

    addContact(name, phone = "***", email = "***") {
        const newContact = {name: name, phone: phone, email: email};
        this.contacts.push(newContact);
        console.log(`Contact ${name} added successfully!\n`);
    },

    showContacts() {
        console.log("Phone Book:");
        this.contacts.forEach(contact => {
            console.log(`• ${contact.name}: ${contact.phone}, ${contact.email}`);
        })
        console.log("");
    }
}

phoneBook.addContact("Mia", "+380 664 4444");
phoneBook.findContact("Mia")
phoneBook.showContacts()
phoneBook.findContact("Emma")
