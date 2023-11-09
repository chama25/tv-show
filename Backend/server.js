
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());


const mongoDBAtlasUri = 'mongodb+srv://che:12345che@tv-show.blptpds.mongodb.net/?retryWrites=true&w=majorityng';


mongoose.connect(mongoDBAtlasUri)
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.error('MongoDB connection error:', err));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
