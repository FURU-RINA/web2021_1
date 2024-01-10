const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('AQ.db');

let schema = `
create table kind(
  id integer primary key,
  Se_id integer ,
  Re_id integer ,
  Ma_id integer ,
  Sp_id integer ,
  count integer not null
);
`

db.serialize(() => {
  db.run(schema, (error, row) => {
    if (error) {
      console.log('Error: ', error);
      return;
    }
    console.log("テーブルを作成しました");
  });
});