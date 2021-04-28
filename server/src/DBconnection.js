const mysql = require('mysql2/promise');



const getDbConnection = async () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "default_schema",
    port: "3306"
  })
}

module.exports = getDbConnection


