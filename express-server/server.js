const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Define your API routes here

app.get('/helloworld', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Add more routes or middleware as needed

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});