import { createContext } from 'react'

interface UserContextTypes {
    userName: string,
    messageText: string,
}

export const UserContext = createContext<UserContextTypes | undefined>(undefined);