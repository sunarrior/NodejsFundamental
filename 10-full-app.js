const express = require('express');
const app = express();
const path = require('path');
const {products} = require('./data.js');
const {comingRequest} = require('./middleware.js');

const PORT = 5000;

app.use(express.static('./public'));
app.use('/api', comingRequest);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './web_content/index.html'));
    // res.send('Home page');
});

app.get('/api', (req, res) => {
    res.json([
        {name: 'john'}, 
        {name: 'susan'}
    ]);
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const {id, name, image, price} = product;
        return {id, name, image, price};
    });
    res.json(newProducts)
});

app.get('/api/products/:id', (req, res) => {
    const {id} = req.params;
    const singleProduct = products.find(product => product.id === Number(id));
    if (!singleProduct) {
        return res.status(404).send('Product not found');
    }
    return res.json(singleProduct);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`Website: http://localhost:${PORT}`);
});