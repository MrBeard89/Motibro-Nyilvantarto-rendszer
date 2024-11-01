import { createContext, useState } from 'react'

export const AppContext = createContext(null)

export const AppContextProvider = (props) => {
  const [componens, setComponens] = useState('grid')

  const contextValue = { componens, setComponens }

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
}
