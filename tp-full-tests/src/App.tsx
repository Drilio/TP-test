import { useCallback, useState } from 'react'
import './App.css'
import { calculerHeure } from './modules/solution'

function App() {
  const [lune, setLune] = useState<undefined|number>(1)
  const [terre, setTerre] = useState<undefined|number>(1)
  const [soleil, setSoleil] = useState<undefined|number>(1)
  const [heure, setHeure] = useState('')

  const handleGetSolution = useCallback(() => {
    setHeure(calculerHeure(lune!, terre!, soleil!))
  }, [lune, terre, soleil])

  return (
    <div>
      <h1>TP-full-tests</h1>
      <div>
        <label htmlFor="lune">Lune</label>
        <input id="lune" type="number" min={1} max={2} 
        value={lune} onChange={(e)  => setLune(parseInt(e.target.value))} required />
      </div>
      <div>
        <label htmlFor="terre">Terre</label>
        <input type="number" min={1} max={2} 
        value={terre} onChange={(e) => setTerre(parseInt(e.target.value))} required />
      </div>
      <div>
        <label htmlFor="soleil">Soleil</label>
        <input type="number" min={1} max={2} 
        value={soleil} onChange={(e) => setSoleil(parseInt(e.target.value))} required/>
      </div>
      <button id='solution'  disabled={!lune || !soleil || !terre} onClick={handleGetSolution}>Solution</button>
      <div>
        { heure &&(
          <p id='result'>Heure: {heure}</p>
        )
        }
      </div>
    </div>
  )
}

export default App