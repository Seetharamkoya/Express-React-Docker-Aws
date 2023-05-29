const express = require('express');
const cors = require('cors');

const app = express();

// Configure CORS to allow requests from http://ec2-3-124-122-180.eu-central-1.compute.amazonaws.com
app.use(
  cors({
    origin: 'https://ec2-35-157-187-47.eu-central-1.compute.amazonaws.com',
  })
);

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
