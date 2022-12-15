const express=require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const formController=require('./controllers/form-conn')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/',formController.addEntry)

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://souravsaha:wMddaiZcqTYIyJxz@cluster0.h7bzzbc.mongodb.net/enrollment?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("connected to database"))
.then(() => {
     app.listen(5000)
}).catch((err) => console.log(err))

