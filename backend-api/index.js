const { hostname } = require('os')
const express = require('express')
const morgan = require('morgan')

const main = () => {
  const app = express()

  app.use(morgan('dev'))

  app.get('/', (req, res) => {
    const appName = hostname()
    res.send({ appName })
  })

  const port = process.env.PORT || 3000
  app.listen(port, () => console.log(`App running on localhost:${port}`))
}

main()