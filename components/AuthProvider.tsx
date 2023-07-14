"use client"
import React, {
  useState,
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
  ReactNode,
} from "react"
import { useRouter } from "next/navigation"

type UserType = {
  email: string
}

const AuthContext = createContext<{
  user: UserType | null
  setUser: Dispatch<SetStateAction<UserType | null>>
}>({
  user: null,
  setUser: () => {},
})

const AuthContextProvider = (props: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null)
  const router = useRouter()

  // if not authenticated, return Login
  if (!user) {
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
export default AuthContextProvider
