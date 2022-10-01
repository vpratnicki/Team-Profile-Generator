const fs = require('fs');

// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and send the error to the `.catch()` method
            if (err) {
                reject(err);
            return;
            }
            // if everything went well, resolve the Promise and send the succesfull data to the `.then()` method
            resolve({
                ok: true,
                message: 'HTML created!'
            });
        });
    });
};

//copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            } 

            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };