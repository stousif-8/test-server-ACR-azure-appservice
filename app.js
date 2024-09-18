const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Docker Container on Azure! This is a demo setup created from GitHub Actions where the image is pushed to Azure Container Registry and deployed to Azure App Service. Thank you');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
