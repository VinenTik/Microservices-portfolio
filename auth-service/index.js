const express = require('express');
const app = express();
const port = process.env.PORT || 8081;

app.get('/login', (req, res) => {
    res.json({ message: 'Login successful' });
});

app.listen(port, () => {
    console.log(`Auth Service running on port ${port}`);
});
