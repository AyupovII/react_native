import AsyncStorage from "@react-native-async-storage/async-storage"
import { atom } from "jotai"
import { atomWithStorage, createJSONStorage } from "jotai/utils"
import { IAuthResponse, ILoginRequest } from "./auth.interfaces"
import { API } from "../api/api"
import axios from "axios"

const storage = createJSONStorage<AuthState>(() => AsyncStorage)
const INITIAL_STATE: AuthState = {
    access_token: null,
    isLoading: false,
    error: null
}
export const authAtom = atomWithStorage<AuthState>("auth",
    {
        access_token: null,
        isLoading: false,
        error: null
    },
    storage
)
export const LogOutAtom = atom(
    null,
    (_get, _set) => {
        _set(authAtom, INITIAL_STATE)
    }
)
export const loginAtom = atom(
    (get) => get(authAtom),
    async (_get, set, { email, password }: ILoginRequest) => {
        set(authAtom, {
            access_token: null,
            isLoading: true,
            error: null
        })
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            const { data } = await axios.post<IAuthResponse>(API.login, {
                email,
                password
            })
            set(authAtom, {
                access_token: data.access_token,
                isLoading: false,
                error: null
            })
        }
        catch (error) {
            set(authAtom, {
                access_token: null,
                isLoading: false,
                error: error.response?.data.message
            })
        }

    })
export interface AuthState {
    access_token: string | null
    isLoading: boolean
    error: string | null
}