function generateHTML(data) {
  return `<!DOCTYPE html>
    <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
    <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
    <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
    <!--[if gt IE 8]><!-->
    <html class="no-js">
      <!--<![endif]-->
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>OG</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossorigin="anonymous"
        />
      </head>
      <body>
      <div class='container'>
          <div class='jumbotron jumbotron-fluid'>
            <h1 class='display-4'>${data.name}</h1>
            <p class='lead'>
              I live in ${data.home}
            </p>
            <p>
            My favorite hobby is ${data.hobby}
            </p>
            <ul class="list-group">
              <li class="list-group-item"><a target="_blank" href="https://www.github.com/${data.github}">Github page!</a></li>
              <li class="list-group-item"><a target="_blank" href=${data.linkedin}>LinkedIn Page!</a></li>
            </ul>
          </div>
        </div>
        <script src="index.js"></script>
      </body>
    </html>
          `;
}

module.exports = generateHTML;
