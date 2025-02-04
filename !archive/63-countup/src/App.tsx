import { useCountUp } from 'react-countup'
import { useEffect, useRef } from 'react'

const App = () => {
  const countUpRef = useRef<HTMLHeadingElement>(null!);

  const {start, pauseResume, reset, update} = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 100,
    duration: 5,
    prefix: 'EUR ',
    decimals: 2,
    decimal: '.',
    suffix: ' total',
    startOnMount: false
  })

  // Встановлення початкового значення для h1 при монтуванні компонента
  useEffect(() => {
    if (countUpRef.current) {
      countUpRef.current.textContent = 'EUR 0.00 total'
    }
  }, [])

  return (
      <div className={'countUp'}>
        <h1 ref={countUpRef}/>

        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
  )
}

export default App
