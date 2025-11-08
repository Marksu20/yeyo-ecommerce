
import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js';

const app = express();

import authRouter from './routes/auth.route.js';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Welcome to the Yeyo E-commerce!');
});

app.listen(PORT, (req, res) => {
  console.log(`Yeyo E-commerce is running on http://localhost:${PORT}`);
});

export default app

