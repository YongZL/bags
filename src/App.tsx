import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Load the Telegram login widget script

    const script = document.createElement('script');
    const tlc = document.getElementById('telegram-login-container')
    script.src = 'https://telegram.org/js/telegram-widget.js?7';
    script.async = true;
    script.setAttribute('data-telegram-login', 'ColtonL');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '10');
    script.setAttribute('data-auth-url', 'http://localhost:3000/auth');
    script.setAttribute('data-request-access', 'write');
    tlc?.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      tlc?.removeChild(script);
    };
  }, []);

  return (
    <>

      <h2>TGBags</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>


      </div>
      <div id="telegram-login-container"></div>
    </>
  )
}

export default App
