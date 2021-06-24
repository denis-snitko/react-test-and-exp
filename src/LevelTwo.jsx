import React, { useContext } from 'react'
import LevelThree from './LevelThree'
import { Context } from './context'

export default function LevelTwo() {
  const { text } = useContext(Context)

  return (
    <div style={{border: '1px solid #ccc', padding: 24}}>
      <h3>Level Two</h3>
      <p>{text}</p>
      <LevelThree />
    </div>
  )
}
