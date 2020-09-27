// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, position, id, email, office) {
    super(name, position, id, email);
    this.office = office;
  }
  getOffice() {
    return this.office;
  }
}

module.exports = Manager;

// var test = new Manager("ted", "manager", 1, "test@gmail.com", 1);
// console.log(test.getName());
// console.log(test.getOffice());
