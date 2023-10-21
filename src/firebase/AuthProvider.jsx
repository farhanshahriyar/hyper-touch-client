// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products') || '[]'))
  return (
    <div>
        <AuthContext.Provider value={{products, setProducts}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
