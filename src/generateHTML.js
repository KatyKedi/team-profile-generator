function generateManager(htmlData) {
    return `
    <div class="card">
        <div class="card-top">
            <h1>${htmlData.manager.name}</h1>
            <h2>Manager</h2>
        </div>
        <div class="card-bottom">
            <ul>
                <li>Id: ${htmlData.manager.id}</li>
                <li>Email: <a href="mailto:${htmlData.manager.email}">${htmlData.manager.email}</a></li>
                <li>Office Number: ${htmlData.manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
};

function generateEngineer(htmlData) {
    var engineers = '';
    for (i=0; i<htmlData.engineers.length; i++) {
        const engineer = htmlData.engineers[i];
        const engineerHTML = `
        <div class="card">
            <div class="card-top">
                <h1>${engineer.name}</h1>
                <h2>Engineer</h2>
            </div>
            <div class="card-bottom">
                <ul>
                    <li>Id: ${engineer.id}</li>
                    <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
        `
        engineers += engineerHTML;
    }
    return engineers;
}

function generateIntern(htmlData) {
    var interns = '';
    for (i=0; i<htmlData.interns.length; i++) {
        const intern = htmlData.interns[i];
        const internHTML = `
        <div class="card">
            <div class="card-top">
                <h1>${intern.name}</h1>
                <h2>Intern</h2>
            </div>
            <div class="card-bottom">
                <ul>
                    <li>Id: ${intern.id}</li>
                    <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li>School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `
        interns += internHTML;
    }
    return interns;
}

function generateHTML(htmlData) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../src/style.css">
</head>
<body>
    <header>My Team</header>
    <div class="row cbody">
        ${generateManager(htmlData)}
        ${generateEngineer(htmlData)}
        ${generateIntern(htmlData)}
    </div>
</body>
</html>
    `
};

module.exports = generateHTML;