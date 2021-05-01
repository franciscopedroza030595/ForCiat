const express = require('express');
const path = require("path");

const bodyParser = require('body-parser');

require('dotenv').config();

const cors = require('cors');



const { dbConnection } = require('./database/config');

const app = express();


app.use(cors());

app.use(bodyParser.json({ limit: "10mb" }));


dbConnection();

app.use(express.static('public'));



app.use('/api/zonas', require('./routes/zonas'));
app.use('/api/animales', require('./routes/animales'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT);
});