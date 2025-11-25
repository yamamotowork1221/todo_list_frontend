interface Env {
    BACKEND_ADDRESS: string;
};

export const env: Env = {
    BACKEND_ADDRESS: process.env.NEXT_PUBLIC_BACKEND_ADDRESS || 'https://',
} as const;