const dotenv = require('dotenv');
const result = dotenv.config();
console.log(result);

module.exports = {
    port: process.env.port,
   dbc: process.env.dbconnection
}
//if(result.error){
//   throw result.error;
//}

//const {parsed: env} = result;

//module.exports = env;