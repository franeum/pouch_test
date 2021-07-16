const PouchDB = require('pouchdb')

const db = new PouchDB('mydb')

db.get('2021-07-16T09:13:15.136Z').then((doc) => {
    //console.log(`${doc.name}, ${doc.age}, ${doc.occupation}`)
    console.log(doc)
}).catch((err) => {
    console.error(err)
})