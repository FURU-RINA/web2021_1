const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('AQ.db');

let sql = `
insert into aquarium("areaname","count","money") values("spetial","","350万");
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
