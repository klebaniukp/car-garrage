import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { warehouseRouter } from './routers/warehouseRouter';

dotenv.config();

const PORT = process.env.PORT || 8000;
const SESSION_SECRET = process.env.SESSION_SECRET as string;
const oneHour = 3600000;

const app = express();

app.set('trust proxy', 1);

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser());

const origin =
    process.env.NODE_ENV === 'production'
        ? process.env.CLIENT_URL
        : 'http://localhost:3000';

app.use(
    cors({
        credentials: true,
        origin,
    })
);

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: oneHour,
            httpOnly: true,
            secure: false,
            sameSite: false,
            path: '/',
        },
        
    })
);

app.use('/api/v1', warehouseRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
