const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('AQ.db');

let schema = `
create table SPETIAL(
  id integer primary key,
  name text not null,
  count integer
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