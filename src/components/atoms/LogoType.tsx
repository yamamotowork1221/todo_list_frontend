import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '600' });

export const LogoType = () => {
  return (
    <span className={`${roboto.className} text-xl text-orange-600`}>Todolist</span>
  );
};