// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createContext } from 'react'

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  return (
    <div>
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
