import mongoose from "mongoose";

async function dbConnect() {
    await mongoose.connect(`${process.env.MONGO_URL}/mern-Authentication`);
    console.log('database connect successfully...');
}
dbConnect()
    .catch(err => console.log(err));

export default dbConnect