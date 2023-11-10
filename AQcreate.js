const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('AQ.db');

let schema = `
create table aquarium(
  id erianame count money,
  name text not null
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