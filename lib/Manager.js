// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.officeNumber = office;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  // getOffice() {
  //   return this.officeNumber;
  // }
}

module.exports = Manager;

// var test = new Manager("ted", "manager", 1, "test@gmail.com", 1);
// console.log(test.getName());
// console.log(test.getOffice());
