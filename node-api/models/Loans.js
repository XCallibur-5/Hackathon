const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema(
    {
        rate: {type: Number},
        time: {type: String},
        interestType: {type: String},
        amount: {type: Number},
        isResolved:{type:Boolean, default:false, required: true},
        borrower: {type: String},
        borrowerScore: {type: Number},
    },
    { timestamps: true }
);
module.exports = mongoose.model("Loans", LoanSchema);