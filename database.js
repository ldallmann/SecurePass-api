import mysql from 'mysql2';

export const database = mysql.createPool({
  host: 'bdgddgwdw0fbxittxv91-mysql.services.clever-cloud.com',
  user: 'urc7ytvsihbdwnca',
  password: 'seVgvk7tYEdGMlyI35OE',
  database: 'bdgddgwdw0fbxittxv91',
  port: 3306,
  connectionLimit: 5,
  ssl: {
    rejectUnauthorized: false
  }
});

database.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL com sucesso!');
  }
});