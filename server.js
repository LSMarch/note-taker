const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const fs = require('fs');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const api = require('./routes/index.js')

const app = express();
const PORT = process.env.PORT || 3000; //process.env.PORT is for prduction level, uses whatever port is available

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api)

// GET route for home
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, './public/index.html'))
});

// GET request for notes.html
app.get('/notes', (req,res) => {
    //console.info(`${req.method} request got`);
    return res.sendFile(path.join(__dirname, 'public/notes.html'));    
});

// // POST request for notes.html
// app.post('/notes', (req,res) => {
//     // POST received
//     console.info(`${req.method} request got`)

//     // prepare response
//     let response

//     // anything in response body
//     if(req.body){
//         response = {
//             status: 'yep',
//             data: req.body,
//         };
//         res.status(201).json(response);
//     } else {
//         res.status(400).json('nope');
//     }
//     console.log(req.body)
// });

// // GET request for api/notes
// app.get('/api/notes', (req,res) => {
//     res.status(200).json(db);
// });

// POST request for api/notes
// app.post('/api/notes', (req,res) => {
//     console.info(`${req.method} request got`);

//     // deconstructing assignment for the items in req.body
//     const { title, text } = req.body

//     if(title && text) {
//         const newNote = {
//             title,
//             text
//         }

//         // convert data to string to save
//         const noteString = JSON.stringify(newNote)

//         //write string to file
//         fs.writeFile(`./db/db.json`, noteString, (err) => 
//             err
//                 ? console.error(err)
//                 : console.log('yep')
//         )

//         const response = {
//             status: 'yep',
//             body: newNote
//         }
    
//         console.log(response);
//         res.status(201).json(response)
//     } else {
//         res.status(500).json('nope')
//     }

    
// });

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

