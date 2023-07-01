import { atom } from 'jotai';

export const categoriesAtom = atom('hackathon');
export const updateCategoryAtom = atom((get) => get(textAtom),
    (get, set, arg) => set(textAtom, arg));

export const filterAtom = atom('all');
export const updateFilterAtom = atom((get) => get(textAtom),
    (get, set, arg) => set(textAtom, arg));