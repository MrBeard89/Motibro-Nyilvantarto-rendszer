import React, { useContext, useState } from 'react'
import Scheduler from 'react-mui-scheduler'
import { AppContext } from '../../context/AppContext'

export const Calendar = () => {
  const { rowState } = useContext(AppContext)
  const [state] = useState({
    options: {
      transitionMode: 'zoom', // or fade
      startWeekOn: 'mon', // or sun
      defaultMode: 'month', // or week | day | timeline
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540,
    },
    alertProps: {
      open: true,
      color: 'info', // info | success | warning | error
      severity: 'info', // info | success | warning | error
      // message: "🚀 Let's start with awesome react-mui-scheduler 🔥 🔥 🔥",
      showActionButton: true,
      showNotification: true,
      delay: 1500,
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true,
    },
  })

  let randomColor = Math.floor(Math.random() * 16777215).toString(16)

  //Táblázatból áthozott adatok
  const arr = rowState.map((e, i) => ({
    id: `event-${e.id}`,
    label: e.tasktype,
    groupLabel: e.fullname,
    user: e.fullname,
    color: `#${randomColor}`,
    startHour: e.start,
    endHour: e.finish,
    date: e.date,
    createdAt: new Date(),
    createdBy: e.fullname,
  }))

  // {
  //   id: "event-1",
  //   label: "Medical consultation",
  //   groupLabel: "Dr Shaun Murphy",
  //   user: "Dr Shaun Murphy",
  //   color: "#f28f6a",
  //   startHour: "04:00 AM",
  //   endHour: "05:00 AM",
  //   date: "2022-05-05",
  //   createdAt: new Date(),
  //   createdBy: "Kristina Mayer"
  // }

  console.log(arr)

  const events = arr || []

  ////////////////////// Sajnos ezekre már nem maradt időm (8órás intervallum) /////////////////
  //De egyébként nem is szügségesek az adatok megjelenitéséhez

  const handleCellClick = (event, row, day) => {
    // Do something...
  }

  const handleEventClick = (event, item) => {
    // Do something...
  }

  const handleEventsChange = (item) => {
    // Do something...
  }

  const handleAlertCloseButtonClicked = (item) => {
    // Do something...
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Scheduler
      locale='hu'
      events={events}
      legacyStyle={true}
      options={state?.options}
      alertProps={state?.alertProps}
      toolbarProps={state?.toolbarProps}
      onEventsChange={handleEventsChange}
      onCellClick={handleCellClick}
      onTaskClick={handleEventClick}
      onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
    />
  )
}
