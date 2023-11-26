import express from "express"

import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json())

const PORT = 3000

app.get("/ping", (_req,res) => {
    console.log("Somone pinged");
    res.send("pong")
    
})

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`);
    
})

app.use('/api/diaries', diaryRouter)