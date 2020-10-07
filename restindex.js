const express = require('express');
const morgan = require('morgan');
const app = express();

function runServer() {
    app.set('port',process.env.PORT || 3000);

    //middlewares
    app.use(morgan('dev'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    //routes
    app.use(require('./routes/index'));
    app.use(require('./routes/kick'));
    app.use(require('./routes/say'));

    app.listen(app.get('port'),()=> {
        console.log(`Server on port ${app.get('port')}`);
    })
};

module.exports.runServer = runServer;