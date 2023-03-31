import express from 'express';
import path from 'path';

const app = express();

// app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
});

export default app;
