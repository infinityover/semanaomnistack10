const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const app = express();

app.use(cors({ origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(routes);
mongoose.connect("mongodb+srv://infinityover:3VZcc3bXfDJ9FOvw@cluster0-jbsqp.gcp.mongodb.net/semana10?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true  })


app.listen(3333);