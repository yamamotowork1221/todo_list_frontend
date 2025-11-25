import { HalfVerticalMenu, HalfVerticalTaskList,HalfVerticalCompletedTaskList,HalfVerticalAccountMenu } from '@/components';
import { useState } from 'react';

export const DashboardMain = () => {

    const [activeContent, setActiveContent] = useState<'main' | 'completedTask' | 'accountMenu'>('main');

    return (
        <main className="flex flex-wrap justify-center">
            <HalfVerticalMenu setActiveContent={setActiveContent} />
            <>
                {activeContent === 'main' && <HalfVerticalTaskList />}
                {activeContent === 'completedTask' && <HalfVerticalCompletedTaskList />}
                {activeContent === 'accountMenu' && <HalfVerticalAccountMenu />}
            </>
        </main>
    );
};