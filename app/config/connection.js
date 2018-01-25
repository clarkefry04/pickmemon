

// var mysql = require('mysql');

// var connection;
// if(process.env.JAWSDB_URL) {
//   //Heroku deployment
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   //local host
//     connection = mysql.createConnection({
//         root: 3000,
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "sequelize_passport",
//     });
// };

// // connection.connect(function(err) {
// //     if (err) {
// //         console.error('error connecting: ' + err.stack);
// //         return;
// //     }
// //     console.log('connected as id ' + connection.threadId);
// // });

// module.exports = connection;