import { useContext, useState } from 'react'
import { Calendar } from './components/Calendar/Calendar'
import { Navbar } from './components/Navbar/Navbar'
import { Grid } from './components/Grid/Grid'
import { AppContext } from './context/AppContext'

function App() {
  const { componens } = useContext(AppContext)

  return (
    <>
      <Navbar />
      {componens === 'grid' ? <Grid /> : <Calendar />}
    </>
  )
}

export default App
