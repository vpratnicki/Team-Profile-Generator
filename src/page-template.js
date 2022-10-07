function generateCardTypes(employees) { 

//create manager card
    function generateManager(manager) {
    return `
    <div class="card border-0 drop-shadow">
        <div class="card-body bg-dark">
            <h5 class="card-title">${manager.getName()}</h5>
            <h5 class="card-title"><i class="fa-solid fa-mug-hot mr-2"></i>${manager.getRole()}</h5>
        </div>
        <ul class="list-group list-group-margins list-item-margins">
            <li class="list-group-item">ID: ${manager.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
  `;
    };

function generateEngineer(engineer) {
    return`
    <div class="card border-0 drop-shadow">
        <div class="card-body bg-dark">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h5 class="card-title"><i class="fa-solid fa-glasses mr-2"></i>${engineer.getRole()}</h5>
        </div>
        <ul class="list-group list-group-margins list-item-margins">
            <li class="list-group-item">ID: ${engineer.getID()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
    </div>
    `;
    };

function generateIntern(intern) {
    return`
        <div class="card border-0 drop-shadow">
            <div class="card-body bg-dark">
                <h5 class="card-title">${intern.getName()}</h5>
                <h5 class="card-title"><i class="fa-solid fa-mug-hot mr-2"></i>${intern.getRole()}</h5>
            </div>
            <ul class="list-group list-group-margins list-item-margins">
                <li class="list-group-item">ID: ${intern.getID()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
        `;
    };

    const cards = [];
    cards.push(employees.filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
    );
    cards.push(employees.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    );
    cards.push(employees.filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    );
    return cards.join("");

}


// function generateCardTypes() {
//     //get array of just the engineer cards
//     const engineerCard = employees.filter(Engineer => {
//         if (Engineer.role) {
//             return true;
//         } else {
//             return false;
//         }
//     });
//     // get array of just the intern cards
//     const internCard = employees.filter(Intern => {
//         if (Intern.role) {
//             return true;
//         } else {
//             return false;
//         }
//     });
    
// };
    
module.exports = employees => {
//  const [ manager, engineers, interns ]= employees;
    // let manager = employees[0]
    // let other = employees[1]
    // console.log(employees);
    // console.log('here is manager destructed from employees:', employees[0]);
    // console.log('here is the second employee:', employees[1]);


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

        ${generateCardTypes(employees)}

        </div>
      </main>
    </body>
    </html>
    `;
  };


//   function generateCardTypes(otherEmployees) {
//     const cards = [];
//     for (var i = 1; i < otherEmployees.length; i++) {
//         switch(otherEmployees[i].role) {
//         case 'Engineer':
//             cards.push(generateEngineer(otherEmployees[i]))
//             console.log('Here are all the engineers arrys', )
//             break;
//         case 'Intern':
//             cards.push(generateIntern(otherEmployees[i]))
//             break;
//             }
//         }
//     return cards;
// }

// ${generateManager(manager)}