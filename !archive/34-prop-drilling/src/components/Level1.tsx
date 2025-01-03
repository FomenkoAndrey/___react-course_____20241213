import { LevelProps } from './LevelProps.ts'
import Level2 from './Level2.tsx'

const Level1 = ({ value }: LevelProps) => {
  return (
    <div>
      <h2>Level 1, received from App: {value}</h2>
      <Level2 value={value} />
    </div>
  )
}

export default Level1
