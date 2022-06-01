import { ConnectionOptions } from 'typeorm';
import { User, Post, Comment } from '../models';
import config from './index';

const dbConfig: ConnectionOptions = {
    type: "postgres",
    host: config.POSTGRES_HOST || "localhost",
    port: Number(config.POSTGRES_PORT) || 5432,
    username: config.POSTGRES_USER || "postgres",
    password: config.POSTGRES_PASSWORD || "postgres",
    database: config.POSTGRES_DB || "postgres",
    entities: [User, Post, Comment],
    synchronize: true,
    logging: false,
};

export default dbConfig;