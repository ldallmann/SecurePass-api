const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'bdgddgwdw0fbxittxv91-mysql.services.clever-cloud.com',
  user: 'urc7ytvsihbdwnca',
  password: 'seVgvk7tYEdGMlyI35OE',
  database: 'bdgddgwdw0fbxittxv91',
  port: 3306,
  ssl: {
    rejectUnauthorized: false
  }
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL com sucesso!');
  }
});

module.exports = connection;
