import express from "express"
import router from "./routes"
import morgan from "morgan"

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

//Middlewares
server.use(morgan("dev"))

//Routes
const routePrefix = "/api/v1"
server.use(routePrefix, router)

const port = 3333

server.listen(port, () => {
  const data = new Date()
  console.log(`Node server started in ${data.toLocaleString()} at http://localhost:${port}${routePrefix}`)
})


export default server