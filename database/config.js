const dbConn = require('../config').dbc; 

const dbConfig = {
    url: dbConn,
    options: {}
}

module.exports = dbConfig;