const express = require('express');
const app = express();
const port = process.env.PORT || 8083;

app.get('/products', (req, res) => {
    res.json([{ id: 1, name: 'Laptop' }]);
});

app.listen(port, () => {
    console.log(`Product Service running on port ${port}`);
});
