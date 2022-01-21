require('./config/db')
const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());



const UserRouter = require('./api/user');


const ResetPassword = require('./api/resetpassword');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

app.use('/user', UserRouter);

app.use(cors(corsOptions));

app.use('/resetpassword', ResetPassword);


let port = process.env.PORT
if (port == null || port == "") {
    port = 5000;
}
app.listen(port, function () {
    console.log("server is running Successfully", port);
});