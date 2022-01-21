const Mongoose = require("mongoose");
const UserVerifySchema = new Mongoose.Schema({
    UserId: String,
    UserString: String,
    CreatedAt: Date,
    ExpiresAt: Date,
    verified: false
})

const UserVerify = Mongoose.model('userVerify', UserVerifySchema);

module.exports = UserVerify;