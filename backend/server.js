import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"



//appconfig
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db coonection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

