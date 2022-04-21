const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helper/fsUtils')

// GET route for grabbing all notes
notes.get('/', (req,res) =>{
    console.info(`${req.method} request got`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for new note
notes.post('/', (req,res) => {
    console.info(`${req.method} request got`);
    //console.log(req.body)
    const { title, text } = req.body

    if(title && text) {
        const newNote = {
            title,
            text
        }
        
        readAndAppend(newNote, './db/db.json')
        res.json('Note added')
    } else {
        res.error('Error in adding note')
    }
});

module.exports = notes