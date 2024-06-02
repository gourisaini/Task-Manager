import mongoose from 'mongoose'

const url = process.env.MONGODB;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to database')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })