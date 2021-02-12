const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  let query = 'SELECT * FROM "favorites" ORDER BY "id";';
  pool.query(query).then((result) =>{
    res.send(result.rows);
    res.sendStatus(200);
  }).catch(error =>{
    console.log(`Error getting the images ${error}`)
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
