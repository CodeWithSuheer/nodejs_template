import mongoose, { Schema } from "mongoose";

const crudScheme = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    desc: {
        type: String,
        required: [true, "Desc is required"]
    },
}, {
    timestamps: true
});

export const CrudModel = mongoose.model("CrudModel", crudScheme);
