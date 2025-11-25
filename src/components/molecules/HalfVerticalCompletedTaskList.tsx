import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getCompletedTasks } from '@/service/getCompletedTasks';
import { deleteTask } from '@/service/deleteTask';

type Task = {
    task_id: number;
    task_name: string;
    task_details: string;
    end_date: string;
    is_completed: boolean;
    created_at: string;
};

type CompletionTaskInputs = {
    task_id: number;
};

type Props = {
    tasks: Task[];
};

const formatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric"
});

export const HalfVerticalCompletedTaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchCompletedTasks = async () => {
            try {
                const res = await getCompletedTasks();
                setTasks(res);
            } catch (err) {
                console.error('タスク取得エラー', err);
            }
        };
        fetchCompletedTasks();
    }, []);

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<CompletionTaskInputs>();

    const onSubmit: SubmitHandler<CompletionTaskInputs> = async (data) => {
        setLoading(true);
        try {
            await deleteTask(data);
            localStorage.setItem('activeContent', 'completedTask');
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert('エラーが発生しました');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative w-2/3 pt-10 h-screen flex flex-col gap-10 items-center">
            <h1 className="text-gray-600">
                完了したタスクの一覧
            </h1>
            <ul className="text-gray-600 w-[90%] mx-auto overflow-y-auto h-full space-y-4">
                {tasks.map((task: Task) => (
                    <li className='flex items-center border-b border-orange-100/50 pb-2' key={task.task_id}>
                        <form
                            onSubmit={handleSubmit((data) => {
                                onSubmit({ ...data, task_id: task.task_id });
                            })}
                            className="bg-white"
                        >
                            <input type="hidden" value={task.task_id}{...register('task_id')} />
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-red-400 hover:bg-red-500 text-white text-sm font-semibold mx-4 p-2 rounded transition-colors duration-200"
                            >
                                {loading ? '送信中...' : '削除'}
                            </button>
                        </form>
                        <span className='flex flex-col '>
                            <span className="text-gray-500 text-sm">{formatter.format(new Date(task.end_date))}</span>
                            <span className="text-gray-500 font-medium">{task.task_name}</span>
                            <span className="text-gray-500"> {task.task_details}</span>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}; 