import { env } from '@/config/env';

export type CompletionTaskInputs = {
    task_id: number;
};

export const completionTask = async (data: CompletionTaskInputs) => {

    const apiAdoresu: string = env.BACKEND_ADDRESS + '/task/' + data.task_id;

    const res = await fetch(apiAdoresu, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
    });

    if (!res.ok) throw new Error('タスクの完了に失敗しました');

    return await res.json();
};