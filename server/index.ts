import app from './app';

const PORT = process.env.port || 1957;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
