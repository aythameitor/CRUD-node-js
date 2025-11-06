const express = require('express');
const app = express();
const PORT = 3000;
const faker = require('faker');
const productRouter = require('../routes/products');

const apiRouter = app.use('/products', productRouter);


app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});

module.exports= apiRouter;