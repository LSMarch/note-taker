const express = require('express');

const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes')

const app = express();
const PORT = process.env.PORT || 3001; //process.env.PORT is for prduction level, uses whatever port is available

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes)


app.listen(PORT, ()=>{
    console.log(`App listening at http://localhost:${PORT}`);
});

