const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('AQ.db');

let sql = `
  select SEA.name as name1, REVER.name as name2, MARINANIMAL.name as name3, SPETIAL.name as name4  from kind inner join SEA on SEA.id = kind.Se_id 
inner join REVER on REVER.id = kind.Re_id 
inner join MARINANIMAL on MARINANIMAL.id = kind.Ma_id 
inner join SPETIAL on SPETIAL.id = kind.Sp_id;
  `
db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );         
      return;
    }
    for( let data of row ) {
     console.log( data.id + ' : ' + data.name1 + ' : '  + data.name2 + ' : ' + data.name3 + ' : ' + data.name4 );
    }
  });
});
