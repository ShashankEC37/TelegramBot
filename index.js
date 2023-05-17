const express = require('express');
const apiRoutes = require('./routes/api');
const app = express();
require("dotenv").config();
app.use('/api', apiRoutes);

// Starting the Server in port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
