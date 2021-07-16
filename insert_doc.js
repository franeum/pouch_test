const PouchDB = require('pouchdb')

const db = new PouchDB('mydb')

doc = {
    _id: new Date().toISOString(),
    name: 'Antonio',
    age: 23,
    occupation: 'designer',
    friends: [1, 5, 7, 9]
}

db.put(doc)
    .then((res) => {
        console.log("Document inserted OK")
    })
    .then(PouchDB.sync('mydb', 'http://localhost:5984/mydb', {
        live: true,
        retry: true
    }))
    .catch((err) => {
        console.error(err)
    })