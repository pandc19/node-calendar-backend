const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,  // Not supported since Mongoose 6, by default true
            // useFindAndModify: false // Not supported since Mongoose 6, by default false
        });

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de incializar BD');
    }
}

module.exports = {
    dbConnection
}