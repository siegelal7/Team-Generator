// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, position, id, email, school) {
    super(name, position, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}
module.exports = Intern;
