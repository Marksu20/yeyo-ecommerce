
import express from 'express';
import { PORT } from './config/env.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to the Yeyo E-commerce!');
});

app.listen(PORT, (req, res) => {
  console.log(`Yeyo E-commerce is running on http://localhost:${PORT}`);
});

export default app

