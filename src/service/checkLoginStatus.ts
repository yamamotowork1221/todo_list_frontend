import { env } from '@/config/env';

const apiAdoresu: string = env.BACKEND_ADDRESS + '/login';

export const checkLoginStatus = async (): Promise<boolean> => {
  try {
    const res = await fetch(apiAdoresu, {
      method: 'GET',
      credentials: 'include',
    });

    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error('Error checking login status:', err);
    return false;
  }
};