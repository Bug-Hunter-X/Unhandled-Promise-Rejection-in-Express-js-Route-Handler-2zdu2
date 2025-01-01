const express = require('express');
const app = express();

const someAsyncOperation = async () => {
  // Simulate an asynchronous operation that might throw an error
  const success = Math.random() < 0.5; 
  if (success) {
    return 'Operation successful';
  } else {
    throw new Error('Asynchronous operation failed');
  }
};

app.get('/', async (req, res, next) => {
  try {
    const result = await someAsyncOperation();
    res.send(result);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});