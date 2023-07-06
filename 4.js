const express = require('express');
const app = express();
const PORT=3020;

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9

  res.json({ random: randomNumber }); // Send the random number as a JSON response
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
