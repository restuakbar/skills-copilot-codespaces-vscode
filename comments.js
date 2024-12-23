// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a list of comments
const comments = [];

// Get all the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});