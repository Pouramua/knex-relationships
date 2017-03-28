var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getParents: getParents,
  getParent: getParent
}

function getParents (testDb) {
  var db = testDb || connection
  return db('parents').select()
}

function getParent (id, testDb) {
  var db = testDb || connection
  return db('parents').where('parents.id', id)
}
