const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('AQ.db');

let sql = `
insert into kind("Se_id","Re_id","Ma_id","Sp_id","count") values("2","","","","8");
`
  

db.serialize( () => {
  db.run( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    console.log( "データを追加しました" );
  });
});
