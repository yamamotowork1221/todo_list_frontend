import { env } from '@/config/env';

export type SignUpFormInputs = {
  username: string;
  email: string;
  password: string;
};

export const submitSignup = async (data: SignUpFormInputs) => {

  const apiAdoresu: string = env.BACKEND_ADDRESS + '/signup';

  const res = await fetch(apiAdoresu, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (!res.ok) throw new Error('サインアップに失敗しました');

  return await res.json();
};