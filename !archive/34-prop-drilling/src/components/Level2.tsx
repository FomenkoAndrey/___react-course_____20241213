import { LevelProps } from './LevelProps.ts'
import Level3 from './Level3.tsx'

const Level2 = ({ value }: LevelProps) => {
  return (
    <div>
      <h2>Level 2, received from Level 1: {value}</h2>
      <Level3 value={value} />
    </div>
  )
}

export default Level2
