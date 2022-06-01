import dotenv from 'dotenv';
const path = require('path');

if (!dotenv) {
    throw new Error('Unable to use dot env lib');
}

const envFound = dotenv.config({ path: path.resolve(process.cwd(), `${process.env.NODE_ENV}.env`) });

console.log("environments", process.env.NODE_ENV, process.cwd(), __dirname, envFound);

if (!envFound) {
    // This error should crash whole process
    throw new Error("⚠️ Couldn't find .env file ⚠️");
}

export default {
    PROJECT_NAME: process.env.PROJECT_NAME || "perro",
    NODE_ENV: process.env.NODE_ENV || "development",
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || 3000,
    POSTGRES_HOST: process.env.POSTGRES_HOST || "localhost",
    POSTGRES_PORT: process.env.POSTGRES_PORT || 5432,
    POSTGRES_USER: process.env.POSTGRES_USER || "postgres",
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "postgres",
    POSTGRES_DB: process.env.POSTGRES_DB || "postgres",
};