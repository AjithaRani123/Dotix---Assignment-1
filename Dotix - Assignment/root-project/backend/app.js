const express = require('express');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
app.use(express.json());
app.use('/jobs', jobRoutes);

app.listen(5000, () => console.log('Server running'));