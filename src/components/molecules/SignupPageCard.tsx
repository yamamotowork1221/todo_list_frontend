import { submitSignup } from '@/service/submitSignup';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type SignUpFormInputs = {
    username: string;
    email: string;
    password: string;
};

type Props = {
    setActiveTab: React.Dispatch<React.SetStateAction<'authPage' | 'loginPage' | 'signupPage'>>;
};

export const SignupPageCard = ({ setActiveTab }: Props) => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormInputs>();

    const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
        setLoading(true);
        try {
            await submitSignup(data);
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert('エラーが発生しました');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-1/2 h-screen flex flex-col gap-10 justify-center items-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded w-full max-w-md flex flex-col gap-6"
            >
                <h2 className="text-2xl font-bold text-center text-orange-600">アカウント作成</h2>
                <ul className="space-y-4">
                    {/* ユーザー名 */}
                    <li>
                        <label className="block mb-1 font-semibold text-gray-500">ユーザー名</label>
                        <input
                            {...register('username', {
                                required: 'ユーザー名は必須です',
                                maxLength: {
                                    value: 10,
                                    message: 'ユーザー名は10文字以内で入力してください',
                                },
                            })}
                            className="w-full border border-orange-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-400"
                            maxLength={10}
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                        )}
                    </li>

                    {/* メールアドレス */}
                    <li>
                        <label className="block mb-1 font-semibold text-gray-500">メールアドレス</label>
                        <input
                            type="email"
                            {...register('email', { required: 'メールアドレスは必須です' })}
                            className="w-full border border-orange-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-400"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </li>

                    {/* パスワード */}
                    <li>
                        <label className="block mb-1 font-semibold text-gray-500">パスワード</label>
                        <input
                            type="password"
                            {...register('password', { required: 'パスワードは必須です', minLength: { value: 6, message: '6文字以上で入力してください' } })}
                            className="w-full border border-orange-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-400"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </li>
                </ul>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition-colors duration-200"
                >
                    {loading ? '送信中...' : 'サインアップ'}
                </button>
            </form>

            <button
                className=" text-gray-500 hover:text-gray-600 active:text-gray-700 font-semibold transition-colors duration-200"
                onClick={() => setActiveTab('authPage')}
            >
                戻る
            </button>
        </section>
    );
};