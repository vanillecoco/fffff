const express = require('express');
const app = express();

const PORT = 3000;



function handleListen() {
	console.log("Listen on 3000 port")
}

function handleHome (req, res) {
    console.log('Home');
    res.send('Browser Home');
}

function handleMe (req, res) {
    console.log('aboutMe');
    res.send('About ME');
}
  
app.get('/', handleHome)

app.get('/aboutMe', handleMe)

app.listen(PORT, handleListen);