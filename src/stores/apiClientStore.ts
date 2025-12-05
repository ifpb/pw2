import { atom } from 'nanostores';

export const apiClientType = atom<
  'rest' | 'curl' | 'fetch' | 'axios' | 'supabase'
>('fetch');
