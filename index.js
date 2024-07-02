const express = require('express');
const Scraper = require('youtube-search-scraper').default;
const app = express();
const path = require('path');
const port = 3000;


const youtube = new Scraper();

app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/api/videos', async (req, res) => {
    const searchQuery = req.query.searchQuery;
    
    console.log(searchQuery);

    youtube.search(searchQuery).then(results => {
        console.log(results.videos);
        res.json(results.videos);
    });

    youtube.search('Never gonna give you up').then(results => {
        console.log(results.videos[0]);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

