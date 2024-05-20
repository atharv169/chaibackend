require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twit',(req,res)=>{
    res.send('hi bro')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please sign in</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})  