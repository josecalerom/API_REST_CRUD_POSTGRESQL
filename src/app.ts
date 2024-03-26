import dotenv from "dotenv";
import express from "express";
import authRoutes from './routes/authRoutes';
import usersRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

//Este middleware permite que usemos y se puedan leer JSONs en la API REST
app.use(express.json());

//ROUTES
//Autenticación
app.use('/auth', authRoutes);

//User
app.use('/users', usersRoutes);
export default app