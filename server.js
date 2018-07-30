// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db_config             = require('./config/db');
const app            = express();


// server.js
const port = 3003;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db_config.url, (err, database) => {
    if (err) return console.log(err)
    // Make sure you add the database name and not the collection name
    let db = database.db("note-api")
    require('./app/routes')(app, db);
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });
})
