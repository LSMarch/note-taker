const apiNotes = require('express').Router();
//const fs = require('fs');
const { readFile, grabNotes } = require('../helper/fsUtils')
const db = require('../db/db.json')

// GET route for grabbing all notes
apiNotes.get('/notes', (req,res) =>{
    //console.info(`${req.method} request got`);
    readFile('./db/db.json', 'utf8', (err, data) => {
        res.json(JSON.parse(data))
        if(err) throw err;
    })
});

// POST route for new note

apiNotes.post('/notes', (req,res) => {
        
        const { title, text } = req.body;
    
        if(title && text) {
            const newNote = {
                title,
                text
            }    
            // convert data to string to save
            grabNotes(newNote, './db/db.json');

            const res = {
                status: 'success',
                body: newNote
            };
            //res.json(res);
    
            
            //res.status(500).json('nope')
        } else {
            //res.status(500).json(`Error in keeping note`)
        }
})

    
        // // deconstructing assignment for the items in req.body
        // const { title, text } = req.body
    
        // if(title && text) {
        //     const newNote = {
        //         title,
        //         text
        //     }
    
        //     // convert data to string to save
        //     const noteString = JSON.stringify(newNote)
    
        //     //write string to file
        //     fs.writeFile(`./db/db.json`, noteString, (err) => 
        //         err
        //             ? console.error(err)
        //             : console.log('yep')
        //     )
    
        //     const response = {
        //         status: 'yep',
        //         body: newNote
        //     }
        
        //     console.log(response);
        //     res.status(201).json(response)
        // } else {
        //     res.status(500).json('nope')
        // }
    




// notes.post('/api/notes', (req,res) => {
//     console.info(`${req.method} request got`);
//     console.log(req.body)
//     const { title, text } = req.body

//     if(title && text) {
//         const newNote = {
//             title,
//             text
//         }
        
//         readAndAppend(newNote, './db/db.json')
//         res.json('Note added')
//     } else {
//         res.error('Error in adding note')
//     }
// });

module.exports = apiNotes