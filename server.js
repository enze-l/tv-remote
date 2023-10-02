const express = require("express")
const shell = require("shelljs")
const http = require("http")

const app = express()
const server = http.createServer(app)


app.get("/toggle", (req, res) =>{
    shell.exec("irsend SEND_ONCE Standard KEY_POWER")
    console.log("toggle accessed")
    res.send("TV power toggled")
})

app.get("/source", (req, res) =>{
    shell.exec("irsend SEND_ONCE Standard KEY_CHANNEL")
    console.log("source accessed")
    res.send("TV Source clicked")
})

app.get("/source/double", (req, res) =>{
    shell.exec("irsend SEND_ONCE Standard KEY_CHANNEL")
    setTimeout(shell.exec("irsend SEND_ONCE Standard KEY_CHANNEL"), 200)
    res.send("TV Source clicked twice")
})


server.listen(8000, "0.0.0.0", ()=>{
    console.log("Listening on http")})
