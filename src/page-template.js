
const generateManager = (managerData) => {
    return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${manager.name}<br/>${manager.role}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.id}</li>
        <li class="list-group-item">${manger.email}<li>
        <li class="list-group-item">${manager.officeNumber}</li>
      </ul>
    </div>
  `;
};

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <header>
        <div class="jumbotron">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container">
        <div class="card-group">
          ${generateManager(managerData)}
        </div>
      </main>
      </body>
    </html>
    `
}
