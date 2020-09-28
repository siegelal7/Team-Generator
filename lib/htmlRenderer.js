const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = (employees) => {
  const html = [];

  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );
  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );
  html.push(
    ...employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );

  return renderMain(html.join(""));
};

const renderManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(
    template,
    "officeNumber",
    manager.getOfficeNumber()
  );
  return template;
};

const renderEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const renderMain = (html) => {
  const template = fs.readFileSync(
    path.resolve(templatesDir, "main.html"),
    "utf8"
  );
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

// function renderHtml(data) {
//   const html = `<!DOCTYPE html>
// <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
// <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
// <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
// <!--[if gt IE 8]><!-->
// <html class="no-js">
//   <!--<![endif]-->
//   <head>
//     <meta charset="utf-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <title></title>
//     <meta name="description" content="" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <link
//       rel="stylesheet"
//       href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
//       integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
//       crossorigin="anonymous"
//     />
//     <script
//       src="https://kit.fontawesome.com/ad673e83e3.js"
//       crossorigin="anonymous"
//     ></script>
//   </head>
//   <body>
//     <nav
//       class="navbar navbar-light bg-light"
//       style="
//         height: 20vh;
//         background: skyblue !important;
//         justify-content: center;
//       "
//     >
//       <span class="navbar-text"><h2 style="color: white">My Team</h2> </span>
//     </nav>
//     <div class="container">
//       <div class="row row-cols-1 row-cols-md-3" style="margin-top: 8vh">
//         <div class="col mb-4">
//           <div class="card">
//             <div class="card-header">
//               <h5>Name here</h5>
//               <p>
//                 <i class="fas fa-mug-hot" style="margin-right: 4px"></i>Position
//               </p>
//             </div>

//             <div class="card-body">
//               <ul class="list-group">
//                 <li class="list-group-item">ID: ${data.id}</li>
//                 <li class="list-group-item">Email: ${data.email}</li>
//                 <li class="list-group-item">Office Number: X</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div class="col mb-4">
//           <div class="card">
//             <div class="card-header">
//               <h5>Name here</h5>
//               <p>
//                 <i class="fas fa-glasses" style="margin-right: 4px"></i>Position
//               </p>
//             </div>

//             <div class="card-body">
//               <ul class="list-group">
//                 <li class="list-group-item">ID: X</li>
//                 <li class="list-group-item">Email: emailhere@gmail.com</li>
//                 <li class="list-group-item">Office Number: X</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div class="col mb-4">
//           <div class="card">
//             <div class="card-header">
//               <h5>Name here</h5>
//               <p>
//                 <i class="fas fa-glasses" style="margin-right: 4px"></i>Position
//               </p>
//             </div>

//             <div class="card-body">
//               <ul class="list-group">
//                 <li class="list-group-item">ID: X</li>
//                 <li class="list-group-item">Email: emailhere@gmail.com</li>
//                 <li class="list-group-item">Office Number: X</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div class="col mb-4">
//           <div class="card">
//             <div class="card-header">
//               <h5>Name here</h5>
//               <p>
//                 <i class="fas fa-glasses" style="margin-right: 4px"></i>Position
//               </p>
//             </div>

//             <div class="card-body">
//               <ul class="list-group">
//                 <li class="list-group-item">ID: X</li>
//                 <li class="list-group-item">Email: emailhere@gmail.com</li>
//                 <li class="list-group-item">Office Number: X</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div class="col mb-4">
//           <div class="card">
//             <div class="card-header">
//               <h5>Name here</h5>
//               <p>
//                 <i class="fas fa-graduation-cap" style="margin-right: 4px"></i
//                 >Position
//               </p>
//             </div>

//             <div class="card-body">
//               <ul class="list-group">
//                 <li class="list-group-item">ID: X</li>
//                 <li class="list-group-item">Email: emailhere@gmail.com</li>
//                 <li class="list-group-item">Office Number: X</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </body>
// </html>`;
//   fs.writeFile("index.html", html, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
// }

module.exports = render;
