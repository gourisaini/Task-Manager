import express from "express"
import 'dotenv/config';
import "./model/db.js"
import bodyParser from "body-parser";
import cors from "cors"
import taskRoutes from './routes/taskRoute.js';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', taskRoutes);

app.listen(
    PORT,
    console.log(`server running on port ${PORT}`)
);