require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const reqFilter = require('./middleware');

var indexRouter = require('./routes/index')

const PORT = process.env.PORT || 8000;

app.use(reqFilter);
app.get('/test', (req, res)=>{
    res.json("this is test file");
})
app.use(express.static(__dirname+"/public/"))
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);



app.listen(PORT, () => {
    console.log("server started at port " + PORT)
})

// const myServer = http.createServer(app);
// myServer.listen(8000, ()=>{console.log("server started at port 8000")});
