import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/config/env';

const BACKEND_URL = env.BACKEND_URL

export async function handler(req: NextRequest) {
  const path = req.nextUrl.pathname.replace('/api/', '')
  const url = `${BACKEND_URL}/${path}`

  const fetchOptions: RequestInit = {
    method: req.method,
    headers: Object.fromEntries(req.headers.entries()),
    body: ['GET', 'HEAD'].includes(req.method ?? '') ? undefined : await req.text()
  }

  const res = await fetch(url, fetchOptions)
  const data = await res.text()
  return new NextResponse(data, { status: res.status })
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler