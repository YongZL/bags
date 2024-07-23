import { useEffect, useState } from 'react'
import './App.css'
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react'

function App() {
  const [count, setCount] = useState(0)


  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);




  return (
    <>

      <h2>TGBags</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <TonConnectButton />

        <div>
          <span>User-friendly address: {userFriendlyAddress}</span>
          <span>Raw address: {rawAddress}</span>
        </div>

      </div>

    </>
  )
}

export default App
