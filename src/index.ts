import express from "express"

import diaryRouter from './routes/diaries'

const app = express()
const cors=require("cors");

const corsOptions = {
    origin: "http://127.0.0.1:5500",
  };
  
app.use(cors(corsOptions)) // Use this after the variable declaration
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