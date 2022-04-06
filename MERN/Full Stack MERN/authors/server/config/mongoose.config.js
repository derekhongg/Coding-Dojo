const mongoose = require('mongoose');
//This will create a database named "product" if one doesn't already exist (no need for mongo shell!):

const dbName = "author";

mongoose.connect(`mongodb://localhost/${dbName}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log(`Connected to the ${dbName} database`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));