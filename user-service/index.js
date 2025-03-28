const express = require('express');
const app = express();
const port = process.env.PORT || 8082;

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }]);
});

app.listen(port, () => {
    console.log(`User Service running on port ${port}`);
});
