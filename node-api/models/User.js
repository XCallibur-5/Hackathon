const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin:{type:Boolean, default:false, required: true},
        score:{ type: Number },
        ctc:{ type: Number },

    },
    { timestamps: true }
);
module.exports = mongoose.model("Users", UserSchema);