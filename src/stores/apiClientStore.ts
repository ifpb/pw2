import { atom } from 'nanostores';

export const restClientType = atom<'rest' | 'curl'>('rest');
export const libraryClientType = atom<'fetch' | 'axios' | 'supabase'>('fetch');
