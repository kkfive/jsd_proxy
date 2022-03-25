const app = require('./src/server.js')

app.listen(process.env.PORT || 9000, () => {
  console.log(`Server start on http://localhost:9000`)
})
