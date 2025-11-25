import { env } from '@/config/env';

export const getCompletedTasks = async () => {

    const apiAdoresu: string = env.BACKEND_ADDRESS + '/task/completed';

    const res = await fetch(apiAdoresu, {
        method: 'GET',
        credentials: 'include',
    });

    if (!res.ok) throw new Error('タスクの取得に失敗しました');

    return await res.json();
};