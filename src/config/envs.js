import { config } from 'dotenv';
config();

export const envs = {
    database: {
        apiKey: process.env.APIKEY,
        authDomain: process.env.AUTHDOMAIN,
        projectId: process.env.PROJECTID,
        storageBucket: process.env.STORAGEBUCKET,
        messagingSenderId: process.env.MESSAGINGSENDERID,
        appId: process.env.APPID,
    },
    port: process.env.PORT || 3000,
    secrets: {
        jwt_secret: process.env.JWT_SECRET,
        session: process.env.SESSION_KEY,
    }
};

