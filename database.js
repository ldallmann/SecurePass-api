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