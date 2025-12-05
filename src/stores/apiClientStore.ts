import { atom } from 'nanostores';

export const apiClientType = atom<'rest' | 'curl'>('rest');
