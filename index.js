import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { PrismaClient } from '@prisma/client';

import ClassRoute from './Routes/Class.Route.js';
import SchoolRoute from './Routes/School.Route.js';
import OfficerRoute from './Routes/Officer.Route.js';
import StudentRoute from './Routes/Student.Route.js';
import http from 'http';

const app = express();
const prisma = new PrismaClient();

const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/class', ClassRoute);
app.use('/school', SchoolRoute);
app.use('/officer', OfficerRoute);
app.use('/student', StudentRoute);

const port = 3005;

server.listen(port, () => {
  console.log("listen on port ", port);
})