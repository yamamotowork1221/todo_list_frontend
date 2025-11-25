import { LogoType } from '@/components';

export const HalfVerticalLogo = () => {
    return (
        <section className="w-1/2 h-screen flex flex-col gap-10 justify-center items-center bg-orange-100">
            <h1 className="scale-300">
                <LogoType />
            </h1>
            <p className="text-gray-600">
                シンプルにタスクを管理します。
            </p>
        </section>
    );
};