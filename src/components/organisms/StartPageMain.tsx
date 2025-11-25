import { HalfVerticalLogo, HalfVerticalAuthButtons, LoginPageCard, SignupPageCard } from '@/components';
import { useState } from 'react';

export const StartPageMain = () => {

    const [activeTab, setActiveTab] = useState<'authPage' | 'loginPage' | 'signupPage'>('authPage');

    return (
        <main className="flex flex-wrap justify-center">
            <HalfVerticalLogo />
            <>
                {activeTab === 'authPage' && <HalfVerticalAuthButtons setActiveTab={setActiveTab} />}
                {activeTab === 'loginPage' && <LoginPageCard setActiveTab={setActiveTab} />}
                {activeTab === 'signupPage' && <SignupPageCard setActiveTab={setActiveTab} />}
            </>
        </main>
    );
};