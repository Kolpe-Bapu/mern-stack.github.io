import mongoose from "mongoose";
import dotenv from 'dotenv';
mongoose.set('strictQuery', true);

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => { 

    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-ikuzxss-shard-00-00.ucz4ddb.mongodb.net:27017,ac-ikuzxss-shard-00-01.ucz4ddb.mongodb.net:27017,ac-ikuzxss-shard-00-02.ucz4ddb.mongodb.net:27017/?ssl=true&replicaSet=atlas-b7asyb-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {

        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database connected successfully')

    }catch (error) { 

        console.log('Error while connecting with the database', error.message)

    }

}

export default Connection;