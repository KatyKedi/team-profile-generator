const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const htmlData = {
    manager: '',
    engineers: [],
    interns: []
};

var employeePrompt = function(employee) {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's work id?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter a valid number for the employee's id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter an email for the employee!");
                        return false;
                    }
                }
            }
        ]).then(data => {
            if (employee.getRole() === 'manager') {
                manager = data;
                managerPrompt(manager);
            } else if (employee.getRole() === 'engineer') {
                engineer = data;
                engineerPrompt(engineer);
            } else {
                intern = data;
                internPrompt(intern);
            }
        });
};

var managerPrompt = function(manager) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your team manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's office number!");
                    return false;
                }
            }
        }
    ]).then(officeNumber => {
        manager.officeNumber = officeNumber.officeNumber;
        htmlData.manager = manager;
        addPrompt();
    });
}

var addPrompt = function() {
    return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another employee?'   
            }
        ]).then(confirm => {
            if (confirm.addEmployee) {
                typePrompt();
            } else {
                const html = generateHTML(htmlData);
                writeToFile(html);
            }
        })
};

var typePrompt = function() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'type',
                message : 'Select the type of employee you would like to add: ',
                choices: ['Engineer', 'Intern']
            }
        ]).then(data => {
            if (data.type === 'Engineer') {
                var engineer = new Engineer();
                employeePrompt(engineer);
            } else {
                var intern = new Intern();
                employeePrompt(intern);
            }
        })
};

var engineerPrompt = function(engineer) {
    return inquirer 
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's GitHub username?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's GitHub username!");
                    }
                }
            }
        ]).then(data => {
            engineer.github = data.name;
            htmlData.engineers.push(engineer);
            addPrompt();
        });
};

var internPrompt = function(intern) {
    return inquirer 
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school name!");
                    }
                }
            }
        ]).then(data => {
            intern.school = data.school;
            htmlData.interns.push(intern);
            addPrompt();
        });
};

// Create a function to write README file
function writeToFile(html) {
    fs.writeFile('./dist/teamProfile.html', html, err => {
        if (err) throw new Error(err);

        console.log('Page created! Check out teamProfile.html in the dist to see it!');
    });
};

var init = function() {
    console.log("Please enter information for the team manager.")
    var manager = new Manager();
    employeePrompt(manager);
};

init();
