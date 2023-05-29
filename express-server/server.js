const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://35.157.187.47', // Replace with the desired origin
}));

// Define your API routes here
app.get('/helloworld', (req, res) => {
  res.json({ message: 'Hello Hubject:))' });
});

// Add more routes or middleware as needed

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});