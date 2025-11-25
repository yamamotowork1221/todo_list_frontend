import { env } from '@/config/env';

export type LoginFormInputs = {
  email: string;
  password: string;
};

export const submitLogin = async (data: LoginFormInputs) => {

  const apiAdoresu: string = env.BACKEND_ADDRESS + '/login';

  const res = await fetch(apiAdoresu, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (!res.ok) throw new Error('サインアップに失敗しました');

  return await res.json();
};