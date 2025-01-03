import { LevelProps } from './LevelProps.ts'

const Level3 = ({ value }: LevelProps) => {
  return (
    <div>
      <h2>Level 3, received from Level 2: {value}</h2>
    </div>
  )
}

export default Level3
