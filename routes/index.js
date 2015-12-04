const express = require('express');
const router = express.Router();

// TODO: Get this from the DB or somewhere better than static JSON
const siteData = require('./test-data/site.json');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index',  siteData);
});

module.exports = router;
