import mongoose from 'mongoose';

const checkConnectionDB = async () => {
    await mongoose.connect(process.env.DB_URL)
        .then(() => console.log('Connected!'))
        .catch((error) => {
            console.log(error);
        });
}

export default checkConnectionDB