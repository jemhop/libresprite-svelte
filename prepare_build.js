import fs from 'fs';

if (!fs.existsSync('./build/.nojekyll')) {
    fs.writeFile('./build/.nojekyll', '', 'utf8', function (err) {
        if (err) {
            console.log("Failed to create nojekyll, project will not deploy.", err.message, err.stack)
        }
        else {
            console.log('.nojekyll created succesfully')
        }
    })
}
else {
    console.log("File already exists")
}