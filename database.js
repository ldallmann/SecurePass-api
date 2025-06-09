import mysql from 'mysql2';

export const database = mysql.createConnection({
  host: 'bsgpoholuauwiok2w54w-mysql.services.clever-cloud.com',
  user: 'u6bzsm7j0ezvzewc',
  password: 'lIuoAYgpPnqqF08LNzTO',
  database: 'bsgpoholuauwiok2w54w',
  port: 3306,
  ssl: {
    rejectUnauthorized: false
  }
});