const mongoose = require("mongoose");

function databaseConnect() {
    const url = process.env.MONGO_URL;
    mongoose.connect(url).then(() => {
        console.log("Database Connected");
    }).catch((err) => {
        console.log("Database connection failed", err);
        process.exit(1);
    });

}

module.exports = databaseConnect;