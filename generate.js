var { data, defaultConfig } = require('./src/data/index')
var fs = require('fs')
// 无匹配时跳转的路径
const mySite = defaultConfig.home

function generateVercelJson() {
  const vercelJsonData = {
    redirects: [],
  }
  data.forEach((item) => {
    vercelJsonData.redirects.push({
      source: `${item.source}(.*)`,
      destination: `${item.destination}$1`,
      statusCode: item.statusCode,
    })
  })
  vercelJsonData.redirects.push({
    source: `/(.*)`,
    destination: `${mySite}`,
    statusCode: 307,
  })
  const jsonStr = JSON.stringify(vercelJsonData)
  fs.writeFileSync(__dirname + '/vercel.json', jsonStr)
}
generateVercelJson()
