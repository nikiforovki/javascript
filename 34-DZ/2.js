class User {
    constructor({name, email}) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`name: ${this.name}`);
        console.log(`email: ${this.email}`);
}
}

const user1 = new User({name:"Kirill", email: "kirill@gmail.com"});
const user2 = new User({name:"Oleg", email: "oleg@gmail.com"});
const user3 = new User({name:"Bob", email: "bob@gmail.com"});


user1.displayInfo();
console.log("-----");
user2.displayInfo();
console.log("-----");
user3.displayInfo();


