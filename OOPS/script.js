//  OOPS  //

// let student = {
//     fname :"Ram",
//     lname : "Raj",
//     fullname : function(){
//         return student.fname+" "+student.lname
//         }
// };

// console.log(student.fullname());

// Example using slanding method//

// let student = {
//     fname :"Ram",
//     lname : "Raj",
// fullname(){
//     return this.fname+this.lname
// },
// login(){
//     return `${this.fullname()} login successfully`
// },
// logout(){
//     return `logout Successfully ${this.fullname()}`
// },
// };

// console.log(student.login());

//  3 USER name printing //

// let user1 = {
//     fname :"Ram",
//     lname : "Raj",
// fullname(){
//     return this.fname+this.lname
// },
// login(){
//     return `${this.fullname()} login successfully`
// },
// logout(){
//     return `logout Successfully ${this.fullname()}`
// },
// };
// let user2 = {
//     fname :"Ram",
//     lname : "esh",
// fullname(){
//     return this.fname+this.lname
// },
// login(){
//     return `${this.fullname()} login successfully`
// },
// logout(){
//     return `logout Successfully ${this.fullname()}`
// },
// };
// let user3 = {
//     fname :"Ram",
//     lname : "Kumar",
// fullname(){
//     return this.fname+this.lname
// },
// login(){
//     return `${this.fullname()} login successfully`
// },
// logout(){
//     return `logout Successfully ${this.fullname()}`
// },
// };

// console.log(user1.login());
// console.log(user2.login());
// console.log(user3.login());

// CLASS method //

class User {
  constructor(f, l) {
    this.fname = f;
    this.lname = l;
  };
  fullname() {
    return this.fname + this.lname;
  };
  login() {
    return `${this.fullname()} login successfully`;
  };
  logout() {
    return `logout Successfully ${this.fullname()}`;
  };
}
let user1 =  new User("Ram","Raj");
let user2 =  new User("Tamil","Selven");

console.log(user2.login())

