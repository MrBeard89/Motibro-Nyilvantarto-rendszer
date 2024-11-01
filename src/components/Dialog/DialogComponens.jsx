import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
 
} from '@mui/material'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

import 'dayjs/locale/hu'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
//import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { TimePicker } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const DialogComponens = () => {
  const {
    open,
    handleClose,
    startValue,
    finishValue,
    dateValue,
    handleChangesDateValue,
    formattedStartValue,
    formattedFinishValue,
    handleChangeStartValue,
    handleChangeFinishValue,
    fullNameValue,
    handleChangeFullNameValue,
    taskTypeValue,
    handleChangeTaskTypeValue,
    handleAddRows,
    scroll,
    fullWidth,
    maxWidth,
  } = useContext(AppContext)
  const formRef = React.createRef(null)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='hu'>
      <FormControl>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          scroll={scroll}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Új bejegyzés</DialogTitle>
          <form ref={formRef}>
            <DialogContent>
              {/* Teljes név */}
              <TextField
                autoFocus
                required
                margin='dense'
                name='full_name'
                label='Teljes Név'
                type='string'
                fullWidth
                variant='standard'
                value={fullNameValue}
                onChange={handleChangeFullNameValue}
              />
              {/* Feladat leirása */}
              <TextField
                sx={{ mb: '2rem' }}
                autoFocus
                required
                margin='dense'
                name='task_type'
                label='Feladat Leírása'
                type='string'
                fullWidth
                variant='standard'
                value={taskTypeValue}
                onChange={handleChangeTaskTypeValue}
              />
              {/* Container box */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                {/* Dátumválasztó */}
                <DatePicker
                  label={'Dátum'}
                  sx={{ width: '100%' }}
                  value={dateValue}
                  onChange={handleChangesDateValue}
                  disablePast
                  required
                />
                {/* Start idő választó */}
                <TimePicker
                  label={'Munkaidő kezdete'}
                  sx={{ width: '100%' }}
                  value={startValue}
                  onChange={handleChangeStartValue}
                  disablePast
                  required
                />
                {/* Munkaidő vége */}
                <TimePicker
                  label={'Munkaidő vége'}
                  sx={{ width: '100%' }}
                  value={finishValue}
                  onChange={handleChangeFinishValue}
                  disablePast
                  required
                />
              </Box>
            </DialogContent>
            {/* Gombok container */}
            <DialogActions>
              {formattedStartValue === null ? (
                <Button variant='contained' disabled color='success'>
                  Mentés
                </Button>
              ) : formattedFinishValue === null ? (
                <Button variant='contained' disabled color='success'>
                  Mentés
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='success'
                  onClick={() => {
                    formRef.current.reportValidity() === true ? handleAddRows() : ''
                  }}
                >
                  Mentés
                </Button>
              )}

              <Button variant='contained' color='error' onClick={handleClose}>
                Mégsem
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </FormControl>
    </LocalizationProvider>
  )
}
