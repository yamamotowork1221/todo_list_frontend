import { env } from '@/config/env';

export const submitLogout = async () => {

    const apiAdoresu: string = env.BACKEND_ADDRESS + '/login';

    const res = await fetch(apiAdoresu, {
        method: 'DELETE',
        credentials: 'include',
    });

    if (!res.ok) throw new Error('ログアウトに失敗しました');

    return await res.json();
};