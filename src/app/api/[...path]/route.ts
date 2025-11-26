import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/config/env';

const BACKEND_URL = env.BACKEND_URL

export async function handler(req: NextRequest) {
    const url = `${BACKEND_URL}${req.nextUrl.pathname}`

    const fetchOptions: RequestInit = {
        method: req.method,
        headers: {
            ...Object.fromEntries(req.headers.entries()),
        },
        body: ['GET', 'HEAD'].includes(req.method ?? '') ? undefined : await req.text(),
        credentials: 'include'
    }

    const res = await fetch(url, fetchOptions)
    const response = new NextResponse(await res.text(), { status: res.status })
    res.headers.get('set-cookie') && response.headers.set('set-cookie', res.headers.get('set-cookie')!)
    return response
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler