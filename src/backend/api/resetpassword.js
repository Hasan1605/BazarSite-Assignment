const User = require('../models/User');
require("dotenv").config();

const UserVerification = require('../models/Resetpassword')
const { v4: uuidv4 } = require('uuid')

const express = require("express");

const bcrypt = require('bcrypt');


require('../config/db');

const router = express.Router();

const nodemailer = require("nodemailer");

const app = express();

const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
var hashed;
const Sendemail = (_id, email) => {

    require('dotenv').config();

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.Gmail_id,
            pass: process.env.Gmail_password
        },
        maxConnections: 5,
        maxMessages: 10
    });

    transporter.verify((error, success) => {
        if (error) {
            console.log(error);

        }
        else {
            console.log("Ready for message");
            console.log(success);

        }
    })

    var currentUrl = "http://localhost:3000/";
    var UniqueId = uuidv4() + _id;
    const Url = (currentUrl + "resetpassword/" + _id + "/" + UniqueId);
    const saltRounds = 10;
    bcrypt
        .hash(UniqueId, saltRounds)
        .then((hashedUniqueId) => {
            const newUserVerification = new UserVerification({
                UserId: hashedUniqueId,
                UserString: UniqueId,
                createdAt: Date.now(),
                expiresAt: Date.now() + 2160000,
                verified: false
            })
            hashed = hashedUniqueId;
            newUserVerification.save()
                .then(() => {
                    transporter.sendMail({
                        from: process.env.Gmail_id,
                        to: email,
                        subject: "Hello ✔",
                        text: "Hello world?",
                        html: `<b>Hello world?</b><a href=${(currentUrl + "resetpassword/" + UniqueId + "/" + email)} >Clik here</a>`,
                    }, (err, info) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            console.log("Sent and saved Succesfully");
                            Url = (currentUrl + "resetpassword/" + UniqueId + "/" + email);
                        }
                    })
                })
        })

    return ({
        urladdress: Url,
        unique: hashed
    });
}

router.post('/', (req, res) => {
    const email = req.body.email;
    console.log(email);
    User.findOne({ Email: email }, function (err, docs) {
        if (err) {
            console.log(err)
            res.send(email);
        }
        else {
            if (docs === null) {
                const Id = uuidv4();
                res.send(
                    {
                        address: email,
                        message: "Not present",
                        id: Id
                    });
                console.log("Not present");
            }
            else {
                var x = Sendemail(docs._id, email);
                const Id = uuidv4();
                if (x.urladdress === 0) {
                    res.send(
                        {
                            address: (email + Id),
                            message: "Error Occured",
                            id: Id
                        });
                    console.log(x);
                }
                else {
                    res.send(
                        {
                            address: (email + Id),
                            message: "success",
                            id: Id
                        });
                }
            }
        }
    })
})



router.post('/:userId/:Email', (req, res) => {
    const { userId, Email } = req.params;
    const Password = req.body.password;
    UniqueString = "1@4-317!98139"

    UserVerification.deleteMany({ UserString: userId }, function (err, docs) {
        if (err || docs === null) {
            res.send({
                address: (userId),
                message: "Error Occurred",
                id: UniqueString
            })
        }
        else {
            const saltRounds = 10;
            bcrypt.hash(Password, saltRounds).then((hashedPassword) => {
                console.log("deleted and Updated Successfully");
                User.updateOne({ Email: Email },
                    { Password: hashedPassword }, function (err, docs) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            console.log("Updated Docs : ", docs);
                            res.send({
                                address: (userId),
                                message: "finished",
                                id: UniqueString
                            })
                        }
                    });
            }).catch((err) => {
                console.log(err);
            })

        }
    })
})




router.get('/:UserId/:Email', (req, res) => {
    const { UserId, Email } = req.params;
    UniqueString = "1@4-317!98139"

    UserVerification.findOne({ UserString: UserId }, function (err, docs) {
        if (err) {
            res.send({
                address: (UserId),
                message: "Error Occurred",
                id: UniqueString
            })
        }
        else if (docs == null) {
            res.send({
                address: (UserId),
                message: "Error Occurred",
                id: UniqueString
            })
        }
        else {
            if (Date.now() > docs.expiresAt) {
                UserVerification.deleteOne({ UserString: UserId }, function (err, docs) {
                    if (err) {
                        res.send({
                            address: (UserId),
                            message: "Error Occurred",
                            id: UniqueString
                        })
                    }
                    else {
                        res.send({
                            address: (UserId),
                            message: "Time Out",
                            id: UniqueString
                        })
                    }
                })
            }
            else {
                res.send({
                    address: (UserId),
                    message: "All done",
                    id: UniqueString
                })
            }
        }
    })
})


module.exports = router;


