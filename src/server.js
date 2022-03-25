const { data, defaultConfig } = require('./data/index')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const app = new Koa()
const router = new KoaRouter()
// Routes

router.get(`/(.*)`, async (ctx) => {
  ctx.body = {
    message: ctx.request.url,
  }
  const pathname = ctx.request.url
  const flag = data.find((item) => {
    return pathname.startsWith(item.source)
  })
  if (flag) {
    const path = pathname.replace(flag.source, '')
    ctx.response.redirect(flag.destination + path, flag.statusCode)
  } else {
    ctx.response.redirect(defaultConfig.home, 307)
  }
})

app.use(router.routes())

module.exports = app
