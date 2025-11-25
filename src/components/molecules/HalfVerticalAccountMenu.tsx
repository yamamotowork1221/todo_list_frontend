import { submitLogout } from '@/service/submitLogout';
import { deleteAccount } from '@/service/deleteAccount';

export const HalfVerticalAccountMenu = () => {

    return (
        <section className="relative w-2/3 pt-10 h-screen flex flex-col gap-10 items-center">
            <h1 className="text-gray-600">
                アカウント
            </h1>
            <button
                className=" text-gray-500 hover:text-gray-600 active:text-gray-700 font-semibold transition-colors duration-200"
                onClick={async () => { await submitLogout(); window.location.reload(); }}
            >
                ログアウト
            </button>
            <button
                className=" bg-red-400 hover:bg-red-500 text-white text-sm font-semibold mx-4 p-2 rounded transition-colors duration-200"
                onClick={async () => { await deleteAccount(); window.location.reload(); }}
            >
                アカウント削除
            </button>
        </section>
    );
}; 