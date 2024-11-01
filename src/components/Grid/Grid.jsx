import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { DialogComponens } from '../Dialog/DialogComponens'

export const Grid = () => {
  const { handleOpen, rowState, handleDeleteRows, rowSelectionModel, setRowSelectionModel } =
    useContext(AppContext)

  const columns = [
    //{ field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fullname',
      headerName: 'Teljes név',
      type: 'string',
      width: 180,
      editable: false,
    },
    {
      field: 'tasktype',
      headerName: 'Feladat tipusa',
      type: 'string',
      width: 300,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Dátum',
      type: 'string',
      width: 200,
      editable: false,
    },
    {
      field: 'start',
      headerName: 'Munkaidő kezdete',
      type: 'string',
      width: 200,
      editable: false,
    },
    {
      field: 'finish',
      headerName: 'Munkaidő vége',
      type: 'string',
      width: 200,
      editable: false,
    },
  ]

  const rows = rowState

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {/* Gombok container */}
      <Box sx={{ width: '100%' }}>
        <Button onClick={handleOpen}>Új bejegyzés</Button>
        {rowSelectionModel.length > 0 ? (
          <Button onClick={handleDeleteRows}>Törlés</Button>
        ) : (
          <Button disabled>Törlés</Button>
        )}
      </Box>

      <DialogComponens />
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel)
        }}
        rowSelectionModel={rowSelectionModel}
        disableMultipleRowSelection
      />
    </Box>
  )
}
