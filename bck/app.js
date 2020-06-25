const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require ('cors');
const cookieParser = require("cookie-parser")
mongoose.Promise= global.Promise
mongoose.connect('mongodb://localhost/job-board').then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

const app = express() ;
app.use(cors());

//midllewares 
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json()); 
app.use('/uploads', express.static(__dirname+'/uploads'));
app.use('/uploadsjob', express.static(__dirname+'/uploadsjob'));





//Routes 
app.use("/users", require("./routes/users"));
//app.use("/usersS", require("./routes/societyusers"))
app.use("/demandes", require("./routes/apply"));
app.use("/jobs", require("./routes/jobs"));
app.use("/cvs",require("./routes/cv"));
app.use("/contact",require("./routes/contact"));
app.use("/recover",require("./routes/reset"));
app.use("/formations", require("./routes/formation"))


//start server 
const port = process.env.PORT || 5000 ;
app.listen(port);
console.log(`Server listening at ${port}`) ;

module.exports= app;

  