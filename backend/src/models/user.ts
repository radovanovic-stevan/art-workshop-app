import mongoose from "mongoose";

const Schema = mongoose.Schema;

let User = new Schema({
    firstname: {
        type: String, required: true
    },
    lastname: {
        type: String
    },
    username: {
        type: String, unique: true
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    email: {
        type: String
    },
    ogranizationName: {
        type: String
    },
    ogranizationAddress: {
        type: String
    },
    organizationMN: {
        type: Number
    },
    status: {
        type: String
    },
    type: {
        type: Number
    },
    slika: {
        type: String
    }
})

export default mongoose.model('User', User, 'users');



/*import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: Buffer,
    },
});

const User = model('User', userSchema);

export default User;*/
