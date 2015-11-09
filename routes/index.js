const express = require('express');
const router = express.Router();

// TODO: Get this from the DB
const siteData = require('./test-data/site.json');

/* GET home page. */
router.get('/', (req, res) => {
  var data = {
    title: 'Grammar Studios',
    siteData
  }
  res.render('index',  data);
});

module.exports = router;
