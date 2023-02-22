//import mongoose from 'mongoose';
let mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({
    id: Number,
    customerName: String,
    phoneNumber:String,
    address:String,
    loanAmount:Number,
    interest:Number,
    loanTermYears:Number,
    loanType:String,
    description:String,
    createdDate:Date,
    insertedDate: { type: Date, default: Date.now }
});

const Model = mongoose.model('Test', blogSchema);

const doc = new Model();
console.log(doc._id instanceof mongoose.Types.ObjectId)


