const mongoose = require("mongoose");

// creating a data bass
mongoose.connect("mongodb://localhost:27017/jeevandynamic", {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
}).then(()=>{
    console.log("connection successful")
}).catch((error) =>{
    console.log(error)
})