import React from 'react'
import LevelOne from './LevelOne'
import { Context } from './context'

export default function App() {
  const [text, setText] = React.useState('Начальное состояние')

  const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
  }

  const changeState = () => {
    setText(randomInteger(1000000, 99999999999))
  }
  return (
    <Context.Provider value={{text, changeState}}>
      <div className='App'>
        <LevelOne />
      </div>
    </Context.Provider>
  )
}
