import React from 'react'
import LevelTwo from './LevelTwo'

export default function LevelOne(props) {
  return (
    <div style={{border: '1px solid #99999', padding: 24}}>
      <h3>Level One</h3>
      {/* <button>
        Change state from parent
      </button> */}
      <LevelTwo />
    </div>
  )
}
