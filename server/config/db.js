const mongoose =require('mongoose');
require('dotenv').config();

const MONGODB_URL="mongodb://localhost:27017/my_pro_database";

const connectDatabase=()=>
{
    mongoose.connect(MONGODB_URL)
    .then((conn)=>console.log(`connected to db:${conn.connection.host}`))
    .catch((err)=>console.log(err.message))
}

module.exports = connectDatabase;