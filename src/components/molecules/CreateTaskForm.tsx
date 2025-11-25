import { createTasks } from '@/service/createTasks';
import { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {
    setActiveCreateTaskForm: React.Dispatch<React.SetStateAction<'inactive' | 'active'>>;
};

type CreateTaskInputs = {
    taskName: string;
    taskDetails: string;
    endDate: Date;
};

export const CreateTaskForm = ({ setActiveCreateTaskForm }: Props) => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<CreateTaskInputs>();

    const onSubmit: SubmitHandler<CreateTaskInputs> = async (data) => {
        setLoading(true);
        try {
            await createTasks(data);
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert('エラーが発生しました');
        } finally {
            setLoading(false);
        }
    };

    const formRef = useRef<HTMLFormElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (formRef.current && !formRef.current.contains(e.target as Node)) {
            setActiveCreateTaskForm('inactive');
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow rounded-xl p-8 w-[90%] mx-auto absolute bottom-8 flex flex-col gap-3"
        >
            <ul className="space-y-2">
                {/* タイトル */}
                <li>
                    <input
                        {...register('taskName', {
                            required: 'タイトルは必須です',
                            maxLength: {
                                value: 30,
                                message: 'タイトルは30文字以内で入力してください',
                            },
                        })}
                        className="w-full rounded px-3 py-2 text-lg font-semibold text-gray-500 focus:outline-none focus:ring"
                        maxLength={30}
                        placeholder="タイトル"
                    />
                    {errors.taskName && (
                        <p className="text-red-500 text-sm mt-1">{errors.taskName.message}</p>
                    )}
                </li>

                {/* 詳細 */}
                <li>
                    <input
                        {...register('taskDetails', {
                            maxLength: {
                                value: 30,
                                message: '詳細は30文字以内で入力してください',
                            },
                        })}
                        className="w-full rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring"
                        maxLength={30}
                        placeholder="詳細"
                    />
                    {errors.taskDetails && (
                        <p className="text-red-500 text-sm mt-1">{errors.taskDetails.message}</p>
                    )}
                </li>

                {/* 終了日 */}
                <li>
                    <label className="block mb-1 font-semibold text-gray-400">終了日</label>
                    <input
                        type="date"
                        {...register('endDate', {
                            required: '終了日は必須です'
                        }
                        )}
                        className="w-full rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring"
                    />
                    {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>}
                </li>
            </ul>

            <button
                type="submit"
                disabled={loading}
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded transition-colors duration-200"
            >
                {loading ? '送信中...' : '新しいタスク'}
            </button>
        </form>
    );
};