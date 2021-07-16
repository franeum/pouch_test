const PouchDB = require('pouchdb')

const db = new PouchDB('mydb')

db.allDocs({ include_docs: true, descending: true }, (err, doc) => {

    doc.rows.forEach(e => {
        console.log(e.doc)
    })

}).catch((err) => {
    console.error(err)
})