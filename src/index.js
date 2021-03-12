const express = require('express');

const app = express();

app.get("/", (resquest, response)=> {return response.json({message: "Hello Marcelo!"})})

const port = process.env.PORT || 3000;
app.listen(port)