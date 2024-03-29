import { User } from "./user.model";
import {atom} from 'jotai'
export const profileAtom = atom<UserState>({
    profile: {
        id: 0,
        name: 'Антон',
    },
    isLoading: 'false',
    error: null
});

export interface UserState{
    profile: User | null;
    isLoading: string;
    error: string | null;
}