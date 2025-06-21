import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//import authRoutes from './routes/authRoutes';
//import expenseRoutes from './routes/expenseRoutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//app.use('/auth', authRoutes);
//app.use('/expenses', expenseRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API Controle de Gastos rodando' });
});

export default app;
