import { CSSProperties, useState } from 'react'
import { BarLoader, BeatLoader, BounceLoader, ClipLoader } from 'react-spinners'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red'
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('tomato')

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(e) => setColor(e.target.value)} placeholder="Color of the loader" />

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <BounceLoader
        color="tomato"
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <BarLoader
        color="indigo"
        loading={loading}
        cssOverride={override}
        width={400}
        height={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <BeatLoader
        color="orange"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
      />
    </div>
  )
}

export default App
