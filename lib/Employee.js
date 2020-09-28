// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    // this.position = position;
    this.id = id;
    this.email = email;
    // this.role = "Employee";
  }
  getName() {
    return this.name;
  }
  getRole() {
    return "Employee";
  }
  // getRole() {
  //   return this.role;
  // }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
}
module.exports = Employee;
