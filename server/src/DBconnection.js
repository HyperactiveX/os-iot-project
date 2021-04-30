const mysql = require('mysql2/promise');



const getDbConnection = async () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "toei",
    port: "3306"
  })
}

module.exports = getDbConnection


