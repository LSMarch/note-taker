const fs = require('fs');
const util = require('util');

// Read file
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const grabNotes = (content, file) => {
    readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            keepNotes(file, parsedData)
        }
    })
};

const keepNotes = (destination, content) => {
    writeFile(destination, JSON.stringify(content, null, 1, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`\n Data written in ${destination}`)
        }
    }))
}

//     /**
//      * writes data to json file given destination and content
//      * @param {string} destination;
//      * @param {object} content;
//      * @returns {void}
//      */

// const writeToFile = (destination,content) =>
//     fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nadded to ${destination}`)
//     );
//     /**
//      * read data from given file and append content
//      * @param {object} content
//      * @param {string} file
//      * @returns {void}
//      */

//     const readAndAppend = (content, file) => {
//         fs.readFile(file, 'utf8', (err, data) =>{
//             if (err) {
//                 console.error(err)
//             } else {
//                 const parsedData = JSON.parse(data);
//                 parsedData.push(content);
//                 writeToFile(file, parsedData);
//             }
//         })
//     }

    module.exports = { readFile, grabNotes, keepNotes }

