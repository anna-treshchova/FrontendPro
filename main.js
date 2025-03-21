const user = {
    name: "John Doe",
    age: 30,
    email: "john@doe.com",
    city: "New York",
    showData() {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Email: ${this.email}`)
        console.log(`City: ${this.city}`)
    }
}

user.showData()
