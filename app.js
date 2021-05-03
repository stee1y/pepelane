const express = require('express')
const path = require('path')
const config = require('config')
const mongoose = require('mongoose')
const app = express()

// app.use(express.json({extended: true}))


// app.use('/api/auth', require('./routes/auth.routes'))

// app.use('/api/link', require('./routes/link.routes'))

// app.use('/t', require('./routes/redirect.routes'))


const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    app.listen(PORT, () => console.log(`App start, port: ${PORT}`))
  } catch(e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()


