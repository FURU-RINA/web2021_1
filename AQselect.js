const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('AQ.db');

let sql = `
  select  SEA.name, REVER.name as name1 from ((kind outer join SEA on SEA.id=kind.Se_id) kind outer join REVER on REVER.id=kind.Re_id);
  `
db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );         
      return;
    }
    for( let data of row ) {
     console.log( data.name1 + ' : ' + data.name /*+ ' : '  + data.name2 + ' : ' + data.name3 + ' : ' + data.name4*/ );
    }
  });
});
