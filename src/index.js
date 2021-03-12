const express = require('express');

const app = express();

app.get("/", (resquest, response)=> {return response.json({message: "Hello Marcelo!"})})

app.listen(3333)