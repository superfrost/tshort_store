const express = require('express')
const {data} = require("./data")

const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
  res.send("Hello from server")
})

app.get("/api/products", (req, res) => {
  res.send(data.products)
})

app.listen(PORT, () => {
  console.log(`Server start on http://localhost:${PORT}`)
})
