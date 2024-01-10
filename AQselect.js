const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('AQ.db');

let sql = `
  select * from kind;
  `
db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );         return;
    }
    for( let data of row ) {
     console.log( data.id + ' : ' + data.Se_id + ' : '  + data.Sp_id + ' : ' + data.count);
    }
  });
});
