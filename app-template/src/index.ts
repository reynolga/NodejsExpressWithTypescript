import express, { type Request, type Response } from 'express'
import 'dotenv/config'
import { connect } from "src/database/connect"
  
connect(); 

const app = express()  
const port = process.env.PORT ?? '3001'
app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})   

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)   
})

  
      