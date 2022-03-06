function generateManager(htmlData) {
    return `
    <h1>${htmlData.manager.name}</h1>
    
    `
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
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>My Team</header>
        <div>${generateManager(htmlData)}</div>
    </body>
    `
};

module.exports = generateHTML;