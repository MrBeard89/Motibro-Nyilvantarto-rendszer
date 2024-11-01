import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import { AppContext } from '../../context/AppContext'

export const Navbar = () => {
  const { setComponens } = useContext(AppContext)
  return (
    <>
      <div>
        <Button onClick={() => setComponens('grid')}>Munkaidő Táblázat</Button>
        <Button onClick={() => setComponens('calendar')}>Munkaidő Naptár</Button>
      </div>
    </>
  )
}
