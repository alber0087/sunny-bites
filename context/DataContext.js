import React, { createContext, useState } from 'react'

const DataContext = createContext()

export default DataContext


export function DataContextProvider({children}) {
  const [coords, setCoords] = useState({})
  const [filterCoords, setFilterCoords] = useState(undefined)

  const value = {coords, setCoords, filterCoords, setFilterCoords}
  
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}