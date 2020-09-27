// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, position, id, email, github) {
    super(name, position, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;
