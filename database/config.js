const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        mongoose.connect(process.env.DB_CNN);

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de incializar BD');
    }
}

module.exports = {
    dbConnection
}