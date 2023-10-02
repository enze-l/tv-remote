const shell = require("shelljs")
const fastify = require('fastify')

const app = fastify()

app.get("/toggle", (req, res) => {
    shell.exec("irsend SEND_ONCE Standard KEY_POWER")
    console.log("toggle accessed")
    res.send("TV power toggled")
    shell.exec("node chromecast.js")
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


app.listen({port: 8000}).then(() => {
    console.log("App running")
})
