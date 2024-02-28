const express = require('express')
const app = express()

const dbconnect = require("./Connection")
dbconnect();
 
const userrModel = require('./collection')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Creating user account 

app.post('/creatUser', (req, res) => {

    const User = new userrModel(req.body)
    User.save().then(() => {res.status(201); console.log(User)}).catch((e) => res.status(400).send(e))
    res.send(User)

})

app.get('/creatUser', async (req, res) => {
    try {
        const getUser = await userrModel.find()
        res.send(getUser)

    } catch (error) {
        console.log(error)
    }

})

// Craeting user login details

app.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body

        const user = await userrModel.findOne({ email: email });
        console.log(user)
        
        if(user.password === password)
        {
            console.log("login");
            return res.send( {"message": "login successfully"});
        }
        else{
            console.log("password is wrong");
           
            return res.status(404).send("password is wrong");
            
        }
        
    } catch (e) {
        console.log(e)
    }
})


app.listen(8000, () => {
    console.log("port is open at 8000")
})