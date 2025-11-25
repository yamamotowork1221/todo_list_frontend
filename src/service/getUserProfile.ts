import { env } from '@/config/env';

export const getUserProfile = async () => {

    const apiAdoresu: string = env.BACKEND_ADDRESS + '/user/profile';

    const res = await fetch(apiAdoresu, {
        method: 'GET',
        credentials: 'include',
    });

    if (!res.ok) throw new Error('プロフィールの取得に失敗しました');

    return await res.json();
};