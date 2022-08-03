import mongoose from 'mongoose';

const clientPromise = async () => mongoose.connect(env.local.MONGO_URI);

export default clientPromise;
