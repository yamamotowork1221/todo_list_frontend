import { env } from '@/config/env';

export const getPendingTasks = async () => {

    const apiAdoresu: string = env.BACKEND_ADDRESS + '/task';

    const res = await fetch(apiAdoresu, {
        method: 'GET',
        credentials: 'include',
    });

    if (!res.ok) throw new Error('タスクの取得に失敗しました');

    return await res.json();
};