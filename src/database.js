const mongosee = require('mongoose');

mongosee.connect('mongodb://mongo/mydatabase')
    .then(db => console.log('DB is conected to', db.connection.host))
    .catch(err => console.log(err));
