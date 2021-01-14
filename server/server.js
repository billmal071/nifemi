const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv/config');

const app = express();

const origins = ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003"]
const corsOptions = {
  origin: function(origin, callback) {
    if (origins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('not allowed by cors'))
    }
  }
};

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).catch(err => console.error(err))

mongoose.connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

app.use('/api/v1/user', require('./routes/user'));
app.use('/api/v1/project', require('./routes/project'));

app.listen(3300, () => {
  console.log(`server listening on port 3300`)
})