const express = require('express');
require('dotenv').config();
const cors = require('cors);

const app = express();
const workOutRoutes = require('./routes/workout');
const mongoose = require('mongoose');

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(express.json());


app.use(cors());
// Routes
app.use('/api/workouts', workOutRoutes);

// Mongoose
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`app is running at PORT number ${process.env.PORT}`);
        });
    }).catch((error) => {
        console.log(error);
    });
