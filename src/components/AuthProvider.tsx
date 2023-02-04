import React, { createContext, PropsWithChildren, useState } from 'react'
import {MainData, MyData} from "./MyType"

export const AuthContext   = createContext<MainData | null>(null)

const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [currentUser, setCurrentUser] = useState<string>("")
    const [data, setData] = useState<MyData[]>()
  return (
    <AuthContext.Provider value={{token: currentUser,data:data }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider