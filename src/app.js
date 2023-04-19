import express from "express";
import cors from "cors";
import { PORT } from './config.js';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json())

app.use(cors())

app.use(indexRoutes)
app.use('/api',employeesRoutes)

app.listen(PORT)
console.log('server on port', PORT)