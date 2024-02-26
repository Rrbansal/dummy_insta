const express = require("express");
require("dotenv").config()
const connectDatabase = require("./config/db");
const { userRoute } = require("./routes/user.route");
const cors = require("cors")
const app = express();
const cookieParser = require("cookie-parser")
const PORT=8081;

app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))

app.use(cookieParser());
app.use(express.json());
app.use('/',userRoute);

app.listen(PORT,async()=>
{
    connectDatabase();
    console.log(`server starting at PORT which is ${PORT}`);
})



