export const API_BASE_URL = typeof window === 'undefined'
    ? (process.env.API_URL || 'http://nginx')
    : (process.env.NEXT_PUBLIC_API_URL || 'https://laravel12.local');