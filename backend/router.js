require("dotenv").config()

const express = require("express")
const cors = require("cors")

const mongoConfig = require("./config")

const Reg = require("./models/RegModel")

// authorization

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

const { authorize } = require('./middleware/authMiddleware')

const app = express ()

const PORT = 5000

app.use(cors())
app.use(express.json())

// authorization
app.use('/auth', authRoutes)
app.use('/api/users', authorize, userRoutes)

app.get("/api/test", (req, res) => {
    console.log("test")
    res.json("Server says: Hello Client!")
})

// "index" route
app.get('/api/regs', async (req, res) => {
    try {
        console.log("its working")
        const regs = await Reg.find()
        res.status(200).json(regs)
        
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
})

// "create" route
app.post('/api/regs', async (req, res) => {
    try {
        console.log('POST /api/regs')
        console.log(req.body)
        const regs = await Reg.create(req.body)
        res.status(200).json(regs)
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
})

// "show" route

app.get('/api/regs/:id', async (req, res) => {
    try {
        console.log("its working")
        const regs = await Reg.findById(req.params.id)
        res.status(200).json(regs)
        
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
})

// "delete" route
app.delete('/api/regs/:id', async (req, res) => {
    try {
        console.log('DELETE /api/regs/:id')
        await Reg.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'successfully deleted' })
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
})

// "update" route
app.put('/api/regs/:id', async (req, res) => {
    try {
        console.log('PUT /api/regs/:id')
        await Reg.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: 'successfully updated' })
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
})


app.listen(PORT, () => {

    console.log(`Listening on port: ${PORT}`)
    mongoConfig()
})

