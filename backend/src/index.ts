import logger from './logger'
import app from './app'
import config from './config'

const PORT = config.port || 3001

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
  logger.info(`App is listening on ${PORT}`)
})
