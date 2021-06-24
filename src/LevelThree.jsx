// import React from 'react'
// import { Context } from './context'

// export default function LevelThree() {
//   return (
//     <div style={{ border: '1px solid #eee', padding: '0 24px' }}>
//       <h3>Level Three</h3>
//       <Context.Consumer>
//         {({ text, changeState }) => (
//           <>
//           <p>{text}</p>
//           <button onClick={changeState}>Change state from parent</button>
//           </>
//         )}
//       </Context.Consumer>
//     </div>
//   )
// }

import React, { useContext } from 'react'
import { Context } from './context'

export default function LevelThree(props) {
  const { text, changeState } = useContext(Context)

  return (
    <div style={{ border: '1px solid #eee', padding: '0 24px' }}>
      <h3>Level Three</h3>
      <p>{text}</p>
      <button onClick={changeState}>
        Change state from parent
      </button>
    </div>
  )
}
