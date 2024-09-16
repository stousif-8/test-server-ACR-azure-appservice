const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>This is a test deployment server to Azure App Service through ACR and GitHub Actions</h1>');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
