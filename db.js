const dotenv = require('dotenv')
dotenv.config()
const MongoClient = require('mongodb').MongoClient

const mongodb = require('mongodb')

// mongodb.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
//     module.exports = client
//     const app = require('./app')
//     app.listen(process.env.PORT)
// })

MongoClient.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(function (client) {
    module.exports = client
    const app = require('./app')
    app.listen(process.env.PORT)
  })
  .catch(err => console.error(err))
