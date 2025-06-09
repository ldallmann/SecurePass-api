import mysql from 'mysql2';

export const database = mysql.createConnection({
  host: 'bdgddgwdw0fbxittxv91-mysql.services.clever-cloud.com',
  user: 'urc7ytvsihbdwnca',
  password: 'seVgvk7tYEdGMlyI35OE',
  database: 'bdgddgwdw0fbxittxv91',
  port: 3306,
  ssl: {
    rejectUnauthorized: false
  }
});