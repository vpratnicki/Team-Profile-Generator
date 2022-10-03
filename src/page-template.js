
const generateManager = (managerData) => {
    return `
    <div class="card border-0 drop-shadow">
        <div class="card-body bg-dark">
            <h5 class="card-title">${manager.name}</h5>
            <h5 class="card-title"><i class="fa-solid fa-mug-hot mr-2"></i>${manager.role}</h5>
        </div>
        <ul class="list-group list-group-margins list-item-margins">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manger.email}</li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
  `;
};

const generateEngineer = (engineerData) => {
    return`
    <div class="card border-0 drop-shadow">
        <div class="card-body bg-dark">
            <h5 class="card-title">${engineer.name}</h5>
            <h5 class="card-title"><i class="fa-solid fa-mug-hot mr-2"></i>${engineer.role}</h5>
        </div>
        <ul class="list-group list-group-margins list-item-margins">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">Office number: ${engineer.officeNumber}</li>
        </ul>
    </div>
    `
};

const generateIntern = (internData) => {
    return`
    <div class="card border-0 drop-shadow">
        <div class="card-body bg-dark">
            <h5 class="card-title">${intern.name}</h5>
            <h5 class="card-title"><i class="fa-solid fa-mug-hot mr-2"></i>${intern.role}</h5>
        </div>
        <ul class="list-group list-group-margins list-item-margins">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">Office number: ${intern.officeNumber}</li>
        </ul>
    </div>
    `
};

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Meet Our Team</title>
        <script src="https://kit.fontawesome.com/a83a779a41.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Public+Sans:ital,wght@0,300;0,500;1,300&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poiret+One&family=Public+Sans:ital,wght@0,300;0,500;1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <header>
        <div class="jumbotron bg-dark drop-shadow">
          <h1 class="display-3 page-title">Meet Our Team</h1>
        </div>
      </header>
      <main class="container bg-image">
        <div class="card-deck">
            ${generateManager(managerData)}
            ${generateEngineer(engineerData)}
            ${generateEngineer(engineerData)}
        </div>
      </main>
    </body>
    </html>
    `
}
