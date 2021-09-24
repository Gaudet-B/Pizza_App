const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pizza_app_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to pizza_app_db"))
    .catch(err => console.log("Could not connect to pizza_app_db", err))