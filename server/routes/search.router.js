const axios = require('axios');
const express = require('express');
const router = express.Router();

console.log(`Your API key is ${process.env.GIPHY_API_KEY}`);

router.post('/', (req, res) => {
    const searchTerm = req.body.searchTerm;
    console.log(`sending off a search for: ${searchTerm}`)
    const GIPHY_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}&limit=10`;
    axios.get(GIPHY_URL).then((response) => {
        res.send(response.data.data);
    }).catch((error) => {
        console.log(`HEY - COULDN"T GET THE SEARCH DONE -> ${error.response.data}`)
        res.sendStatus(500);
    })
})

module.exports = router;