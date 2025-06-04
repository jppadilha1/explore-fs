import DbInstance from "./infra/localdb.js";

const db = new DbInstance();

db.create("João", "jppadilhadev@gmail.com");
db.create("Pedro", "jppadilhadev2@gmail.com");

db.read();
console.log(db.qtusers);

const db2 = new DbInstance();
db2.read();
