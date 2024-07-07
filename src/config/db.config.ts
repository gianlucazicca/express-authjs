import dotenv from 'dotenv';

dotenv.config();
/*
config form DB
*/
const dbConfig = {};
const connectToDb = async () => {
    return dbConfig;
};

export { connectToDb };
