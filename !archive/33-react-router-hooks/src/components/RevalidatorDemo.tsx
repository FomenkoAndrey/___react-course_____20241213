import { useRevalidator } from 'react-router'
import { useState } from 'react'

const RevalidatorDemo = () => {
  const { revalidate } = useRevalidator()
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString())

  const handleRevalidate = () => {
    setTimestamp(new Date().toLocaleTimeString())
    revalidate()
  }

  return (
    <div>
      <h1>Демо Revalidator</h1>
      <p>Останнє оновлення: {timestamp}</p>
      <button onClick={handleRevalidate}>Оновити дані</button>
    </div>
  )
}

export default RevalidatorDemo
