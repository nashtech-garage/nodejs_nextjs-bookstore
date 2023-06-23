import type { NextApiRequest, NextApiResponse } from 'next/types'
import httpProxy from 'http-proxy'
import httpProxyMiddleware from 'next-http-proxy-middleware'
import Cookies from 'cookies'

const handleProxyInit = (proxy: httpProxy) => {
  proxy.on('proxyReq', (proxyReq, req, res) => {})
  proxy.on('proxyRes', (proxyRes, req, res) => {
    let data: string = ''
    proxyRes.on('data', (chunk) => {
      data += chunk
    })
    proxyRes.on('end', function () {
      res.setHeader('Content-Type', 'application/json')

      const result = JSON.parse(data)
      // Data won't have statusCode unless the response has error
      if (!result.statusCode) {
        // Setting access-token into Cookie
        const { accessToken, expireAt } = result.data
        const cookies = new Cookies(req, res)
        cookies.set('access-token', accessToken, {
          expires: new Date(expireAt),
          httpOnly: true,
          secure: false,
        })

        res.end(JSON.stringify({ message: 'Login Successfully' }))
        return
      }

      res.statusCode = result.statusCode
      res.end(data)
    })
  })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await httpProxyMiddleware(req, res, {
    target: process.env.NEXT_PUBLIC_SERVER,
    onProxyInit: handleProxyInit,
    selfHandleResponse: true,
  })
}
