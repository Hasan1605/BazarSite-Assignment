require('dotenv').config();
const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URILocal,
        {
            useNewUrlParser: true,
            useunifiedTopology: true
        })
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log(err)
    });


// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }


