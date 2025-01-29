import { useState } from 'react'

const ProblematicComponent = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(1)

  const computeExpansiveValue = (num: number) => {
    console.log('Дуже важкі обчислення')
    let value = num

    for (let i = 0; i < 10000000000; i++) {
      value += num
    }

    console.log('...закінчено')

    return value
  }

  const expensiveValue = computeExpansiveValue(item)

  return (
    <div>
      <h1>Важке обчислення: {expensiveValue}</h1>
      <h2>Просте значення (item): {item}</h2>
      <h2>Просте обчислення (count): {count}</h2>
      <button onClick={() => { setCount(count + 1) }}>Increase counter</button>
      <button onClick={() => { setItem(item + 1) }}>Increase item</button>
    </div>
  )
}

export default ProblematicComponent
