const PouchDB = require('pouchdb')

const db = new PouchDB('mydb')

db.get('Peter').then((doc) => {
    //console.log(`${doc.name}, ${doc.age}, ${doc.occupation}`)
    console.log(doc)
}).catch((err) => {
    console.error(err)
})