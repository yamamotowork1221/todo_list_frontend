import { env } from '@/config/env';

export const deleteAccount = async () => {

    const apiAdoresu: string = env.BACKEND_ADDRESS + '/signup/delete';

    const res = await fetch(apiAdoresu, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    });

    if (!res.ok) throw new Error('アカウントの削除に失敗しました');

    return await res.json();
};