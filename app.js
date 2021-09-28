
const express = require('express');
const path = require('path');
const routes = require('./routes');


const app = express();

// Set the default views directory to html folder
app.set('views', path.join(__dirname,'/html'));


// Set the folder for css & java scripts
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Set the view engine to ejs
app.use('/', routes);
app.set('view engine', 'ejs');


 
app.listen(process.env.PORT || 3000,function(){
  console.log("Server started on port 3000");
});
