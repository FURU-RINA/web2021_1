const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('AQ.db');

let sql = `
insert into SEA("name","count") values("マグロ","8");
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
