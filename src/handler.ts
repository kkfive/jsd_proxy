// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import data = require('./data/index')
interface RedirectDataType {
  source: string
  destination: string
  statusCode: 301 | 302 | 307 | 308
}
interface DefaultConfigType {
  home: string
}
const dataList: RedirectDataType[] = data.data
const defaultConfig: DefaultConfigType = data.defaultConfig

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const { pathname } = url
  const flag = dataList.find((item) => {
    return pathname.startsWith(item.source)
  })
  if (flag) {
    const path = pathname.replace(flag.source, '')
    return Response.redirect(flag.destination + path, flag.statusCode)
  } else {
    return Response.redirect(defaultConfig.home, 307)
  }
}
