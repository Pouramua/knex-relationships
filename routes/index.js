var express = require('express')
var knex = require('knex')

var db = require('../db')

module.exports = {
  getParents: getParents,
  getParent: getParent,
  newUserForm: newUserForm,
  saveForm: saveForm
}

function getParents (req, res) {
  db.getParents()
    .then(function (parents) {
      res.render('index', { parents: parents })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getParent (req, res) {
  var id = req.params.id

  db.getParent(id)
    .join('profile', 'parents.id', '=', 'profile.user_id')
    .select('parents.id', 'parents.name', 'parents.email', 'profile.star_sign')
    .then(function (profile) {
      res.render('profile', {parents: profile})
    })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

function newUserForm (req, res) {
  res.render('newUserForm')
}

function saveForm (req, res) {
  var details = req.body
  res.render('newUserForm', details)
}
