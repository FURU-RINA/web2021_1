const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('AQ.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const message = "ようこそ";
  res.render('AQshow', {mes:message});
});

app.get("/db", (req, res) => {
    db.serialize( () => {
        db.all("select id, areaname, count from aquarium;", (error, row) => {
            if( error ) {
                res.render('AQshow', {mes:"エラーです"});
            }
            res.render('AQ', {data:row});
        })
    })
})

app.get("/sea", (req, res) => {
    db.serialize( () => {
        db.all("select id, name, count from SEA;", (error, row) => {
            if( error ) {
                res.render('AQshow', {mes:"エラーです"});
            }
            res.render('sea', {data:row});
        })
    })
})
app.get("/rever", (req, res) => {
    db.serialize( () => {
        db.all("select id, name, count from REVER;", (error, row) => {
            if( error ) {
                res.render('AQshow', {mes:"エラーです"});
            }
            res.render('rever', {data:row});
        })
    })
})
app.get("/marinanimal", (req, res) => {
    db.serialize( () => {
        db.all("select id, name, count from MARINANIMAL;", (error, row) => {
            if( error ) {
                res.render('AQshow', {mes:"エラーです"});
            }
            res.render('marinanimal', {data:row});
        })
    })
})
app.get("/special", (req, res) => {
    db.serialize( () => {
        db.all("select id, name, count from SPETIAL;", (error, row) => {
            if( error ) {
                res.render('AQshow', {mes:"エラーです"});
            }
            res.render('special', {data:row});
        })
    })
})

app.post("/public/Sea.html", (req, res) => {
let sql = `
insert into SEA (name,count) values ("` + req.body.name + `",` + req.body.count + `);
`
console.log(sql);
  db.serialize( () => {
    db.run( sql, (error, row) => {
      console.log(error);
      if(error) {
        res.render('AQshow', {mes:"エラーです"});
      }
      res.render('sea', {mes:"成功です"});
      });
    });
  console.log(req.body);
});

app.post("/Rever", (req, res) => {
let sql = `
insert into REVER (名前,匹数) values ("` + req.body.name + `",` + req.body.count + `);
`
console.log(sql);
  db.serialize( () => {
    db.run( sql, (error, row) => {
      console.log(error);
      if(error) {
        res.render('AQshow', {mes:"エラーです"});
      }
      res.render('AQshow', {mes:"成功です"});
      });
    });
  console.log(req.body);
});

app.post("/Special", (req, res) => {
let sql = `
insert into SPETIAL (名前,匹数) values ("` + req.body.name + `",` + req.body.count + `);
`
console.log(sql);
  db.serialize( () => {
    db.run( sql, (error, row) => {
      console.log(error);
      if(error) {
        res.render('AQshow', {mes:"エラーです"});
      }
      res.render('AQshow', {mes:"成功です"});
      });
    });
  console.log(req.body);
});

app.post("/Marinanimal", (req, res) => {
let sql = `
insert into MARINANIMAL (名前,匹数) values ("` + req.body.name + `",` + req.body.count + `);
`
console.log(sql);
  db.serialize( () => {
    db.run( sql, (error, row) => {
      console.log(error);
      if(error) {
        res.render('AQshow', {mes:"エラーです"});
      }
      res.render('AQshow', {mes:"成功です"});
      });
    });
  console.log(req.body);
});

app.get("/top", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, Se_id, Re_id, Ma_id, Sp_id, count from kind order by count" + desc + " limit " + req.query.pop + ";";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('AQshow', {mes:"エラーです"});
            }
            //console.log(data);    // ③
            res.render('select', {data:data});
        })
    })
})
app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));