const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use('/api/students', studentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
