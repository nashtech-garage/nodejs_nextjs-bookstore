import type { NextApiRequest, NextApiResponse } from 'next/types'
import httpProxy from 'http-proxy'
import httpProxyMiddleware from 'next-http-proxy-middleware'
import Cookies from 'cookies'

const handleProxyInit = (proxy: httpProxy) => {
  proxy.on('proxyReq', (proxyReq, req, res) => {
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access-token')
    if (accessToken) {
      proxyReq.setHeader('Authorization', `Bearer ${accessToken}`)
    }
  })
  proxy.on('proxyRes', (proxyRes, req, res) => {})
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await httpProxyMiddleware(req, res, {
    target: process.env.NEXT_PUBLIC_SERVER,
    onProxyInit: handleProxyInit,
  })
}
