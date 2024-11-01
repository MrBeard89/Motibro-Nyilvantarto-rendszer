import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext(null)

export const AppContextProvider = (props) => {
  const [rowState, setRowState] = useState(JSON.parse(localStorage.getItem('rowStorage'))) //Adat tömb
  const [componens, setComponens] = useState('grid') //Navbarhoz this.state.
  //Input statek
  const [startValue, setStartValue] = useState(null)
  const [dateValue, setDateValue] = useState(null)
  const [formattedDateValue, setFormattedDateValue] = useState(null)
  const [formattedStartValue, setFormattedStartValue] = useState(null)
  const [finishValue, setFinishValue] = useState(null)
  const [formattedFinishValue, setFormattedFinishValue] = useState(null)
  const [fullNameValue, setFullNameValue] = useState('')
  const [taskTypeValue, setTaskTypeValue] = useState('')
  //Dialoghoz
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')
  const [fullWidth, setFullWidth] = useState(true)
  const [maxWidth, setMaxWidth] = useState('md')
  //Sor választáshoz
  const [rowSelectionModel, setRowSelectionModel] = useState([])
  //Dialog statek reset
  const ResetAllDialogValues = () => {
    setStartValue(null)
    setFinishValue(null)
    setFullNameValue('')
    setTaskTypeValue('')
  }
  //Handlechange funkciók
  const handleChangeStartValue = (e) => {
    setFormattedStartValue(e.format('HH:mm A'))
  }
  const handleChangesDateValue = (e) => {
    setFormattedDateValue(e.format('YYYY-MM-DD'))
  }

  const handleChangeFinishValue = (e) => {
    setFormattedFinishValue(e.format('HH:mm A'))
  }
  const handleChangeFullNameValue = (e) => {
    setFullNameValue(e.target.value)
  }

  const handleChangeTaskTypeValue = (e) => {
    setTaskTypeValue(e.target.value)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    ResetAllDialogValues()
  }
  //Sor hozzáadása
  const handleAddRows = () => {
    setRowState((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 100),
        fullname: fullNameValue,
        tasktype: taskTypeValue,
        date: formattedDateValue,
        start: formattedStartValue,
        finish: formattedFinishValue,
      },
    ])
    ResetAllDialogValues()
    handleClose()
  }
  //Sor törlése
  const handleDeleteRows = () => {
    const filteredRowState = rowState.filter((row) => row.id !== rowSelectionModel[0])
    setRowState(filteredRowState)
  }
  //Localstorage mentés
  useEffect(() => {
    localStorage.setItem('rowStorage', JSON.stringify(rowState))
  }, [rowState])
  //Context object
  const contextValue = {
    scroll,
    fullWidth,
    maxWidth,
    rowState,
    setRowState,
    open,
    componens,
    setComponens,
    handleOpen,
    handleClose,
    dateValue,
    handleChangesDateValue,
    startValue,
    finishValue,
    formattedStartValue,
    formattedFinishValue,
    handleChangeStartValue,
    handleChangeFinishValue,
    fullNameValue,
    handleChangeFullNameValue,
    taskTypeValue,
    handleChangeTaskTypeValue,
    handleAddRows,
    handleDeleteRows,
    rowSelectionModel,
    setRowSelectionModel,
  }

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
}
