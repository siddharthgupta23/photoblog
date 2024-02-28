const mongoose = require('mongoose')


const dbconnect = async () => {


    try {
        await mongoose.connect("mongodb://localhost:27017/news", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log("MongoDB Connect");
    }
    catch (error) {
        console.log(`Connection Fail ${error}`);
    }
}



module.exports = dbconnect;
