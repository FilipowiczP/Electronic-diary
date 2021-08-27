const mongoose = require("mongoose");

const connectToMongoose = async () => {
    const url = `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;

    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = {
    conntectDB: connectToMongoose
}
