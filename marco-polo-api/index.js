const express = require('express')

const main = () => {
  const app = express()

  app.get('/', (req, res) => {
    const appName = process.env.APP_NAME || 'development'
    res.send({ appName })
  })

  const port = process.env.PORT || 3000
  app.listen(port, () => console.log(`App running on localhost:${port}`))
}

main()