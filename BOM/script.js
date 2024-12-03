// Inheritance:

// PaidUser inherits properties and methods from User using extends and super.
// Method Chaining:

// Returning this from methods like login and message allows chaining multiple method calls on the same object.
// Encapsulation:

// Properties (fname, lname, data) and methods (login, logout, message) are bundled within their respective classes.
// Polymorphism:

// The PaidUser class adds the message method to extend the functionality of the base class

class User {
  constructor(a, b) {
    this.fname = a;
    this.lname = b;
  }
  fullname() {
    return this.fname + this.lname;
  }
  login() {
    console.log(`${this.fullname()} Login succsfully`)
    return this;
  }
  logout() {
    return `${this.fullname()} Logout succsfully`;
  }
}
class Paiduser extends User{
    constructor(b,c) {
        super(b,c);
        this.data=100;
    };
    message(){
        console.log(`your having ${this.data}GB free`)
        return this;
    }
};
let user1=new User("Ram","Kumar"),
user2=new Paiduser("Tamil","selvan");
console.log(user2.login().message().logout());

