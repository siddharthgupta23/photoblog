const mongoose = require('mongoose')

const userScema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 2,
    },

    email: {
        type: String,
        require: true,
        unique: true,
    },

    gander: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true,
        min: 6,
    },

    phnno: Number
},

)

const userrModel = new mongoose.model( "userrModel", userScema)

module.exports = userrModel

