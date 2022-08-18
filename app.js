const express = require('express');
const app = express();

const auth = require('./routers/auth');
const peopleAPI = require('./routers/people');

app.use(express.static('./method_public'));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.use('/api/people', peopleAPI);
app.use('/auth', auth);

const PORT = 5000;

app.get('*', (req, res) => {
    res.status(404).send(
        '<h1>This page doesnt exist! Please moving to \
            <a href="http://localhost:5000/api/people">api page</a> \
        </h1>'
    );
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`Website: http://localhost:${PORT}`);
});