import { env } from '@/config/env';

export type CreateTasksInputs = {
    taskName: string;
    taskDetails: string;
    endDate: Date;
};

export const createTasks = async (data: CreateTasksInputs) => {

    const apiAdoresu: string = env.BACKEND_ADDRESS + '/task';

    const res = await fetch(apiAdoresu, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
    });

    if (!res.ok) throw new Error('タスクの作成に失敗しました');

    return await res.json();
};