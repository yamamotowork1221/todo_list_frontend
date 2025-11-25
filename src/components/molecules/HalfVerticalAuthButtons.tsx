import { useState } from 'react';

type Props = {
    setActiveTab: React.Dispatch<React.SetStateAction<'authPage' | 'loginPage' | 'signupPage'>>;
};

export const HalfVerticalAuthButtons = ({ setActiveTab }: Props) => {
    return (
        <section className="w-1/2 h-screen flex flex-col gap-10 justify-center items-center">
            <button
                className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded text-white font-semibold py-2 px-4 transition-colors duration-200"
                onClick={() => setActiveTab('signupPage')}
            >
                アカウント作成
            </button>
            <button
                className=" text-gray-500 hover:text-gray-600 active:text-gray-700 font-semibold transition-colors duration-200"
                onClick={() => setActiveTab('loginPage')}
            >
                ログイン
            </button>
        </section>
    );
};