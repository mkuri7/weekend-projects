import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  return (
    <div>
      <h1>Hello Electron</h1>

      <button onClick={() => setMessage('Hello World!')}>
        Click Me
      </button>

      <p>{message}</p>
    </div>
  )
}

export default App