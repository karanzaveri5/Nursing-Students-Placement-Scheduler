import mongoose from "mongoose";

export async function connectToDB() {
    try {
        //await mongoose.connect(process.env.MONGODB_CONNECTION_STRING || " mongodb+srv://kzstar:Karan123@cluster0.vowlw1a.mongodb.net/?retryWrites=true&w=majority");
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "mongodb+srv://kzstar:root@cluster0.vowlw1a.mongodb.net/test");
    } catch (err) {
        throw new Error(`Error while connecting to db - ${err}`);
    }
}

