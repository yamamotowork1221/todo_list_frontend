interface Env {
    BACKEND_ADDRESS: string;
    BACKEND_URL: string;
};

export const env: Env = {
    BACKEND_ADDRESS: process.env.NEXT_PUBLIC_BACKEND_ADDRESS || 'https://',
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://',
} as const;