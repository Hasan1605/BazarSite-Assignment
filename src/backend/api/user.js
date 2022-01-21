const express = require("express");
const router = express.Router();

const User = require("../models/User");
// const UserVerificaton = require("../models/UserVerification");

const nodeMailer = require("nodemailer");

const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
// router.post('/signup', (req, res) => {
//     res.send({
//         Status: "running"
//     });
//     console.log("Running");
// })

// router.post('/signin', (req, res) => {

// })

module.exports = router;