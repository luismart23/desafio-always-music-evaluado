import 'dotenv/config'
import express from 'express'
import estudiantesRoutes from './routes/estudiante.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rutas /estudiantes
app.use('/estudiantes', estudiantesRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})