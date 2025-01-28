const NonMemoComponent = ({ count }: { count: number }) => {
  console.log('Child component render', { count })
  return (
    <h2>{count}</h2>
  )
}

export default NonMemoComponent
