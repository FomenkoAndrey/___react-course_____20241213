import Button from './components/Button.tsx'
import { useStyles } from './hooks/useStyles.ts'

const App = () => {
  const classes = useStyles()

  console.log(classes)

  return (
    <div>
      <h1 className={classes.label}>Це лейбл-текст</h1>
      <Button>Наведи курсор</Button>
    </div>
  )
}

export default App
