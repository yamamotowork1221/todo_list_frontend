import { useState, useEffect } from 'react';
import { getUserProfile } from '@/service/getUserProfile';

type User = {
    id: string;
    mail_address: string;
    user_name: string;
    public_key: string;
};

type Props = {
    setActiveContent: React.Dispatch<React.SetStateAction<'main' | 'completedTask' | 'accountMenu'>>;
};

export const HalfVerticalMenu = ({ setActiveContent }: Props) => {
    useEffect(() => {
        const savedContent = localStorage.getItem('activeContent');
        if (savedContent) {
            setActiveContent(savedContent as "main" | "completedTask" | "accountMenu");
            localStorage.removeItem('activeContent'); // 一度だけ使用する場合
        }
    }, []);

    const [user, setUser] = useState<User[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUserProfile();
                setUser(res);
            } catch (err) {
                console.error('プロフィール取得エラー', err);
            }
        };
        fetchUser();
    }, []);

    return (
        <section className="w-1/3 p-5 h-screen flex flex-col  items-start gap-10  bg-orange-100/25">
            <span className="max-w-max bg-white rounded-full py-3 px-6 text-xs md:text-base font-bold text-gray-500">
                <ul >
                    {user.map((user: User) => (
                        <li key={user.id}>
                            {user.user_name}
                        </li>
                    ))}
                </ul >
            </span>
            <nav className="flex flex-col  items-start gap-10 pl-5">
                <button
                    className=" text-gray-500 hover:text-gray-600 active:text-gray-700 font-semibold transition-colors duration-200"
                    onClick={() => setActiveContent('main')}
                >
                    タスク
                </button>
                <button
                    className=" text-gray-500 hover:text-gray-600 active:text-gray-700 font-semibold transition-colors duration-200"
                    onClick={() => setActiveContent('completedTask')}
                >
                    完了したタスク
                </button>
                <button
                    className=" text-gray-500 hover:text-gray-600 active:text-gray-700 font-semibold transition-colors duration-200"
                    onClick={() => setActiveContent('accountMenu')}
                >
                    アカウント
                </button>
            </nav>
        </section>
    );
};

