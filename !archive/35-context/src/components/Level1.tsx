import { FirstContext } from '../App.tsx'
import { LevelProps } from './LevelProps.ts'
import Level2 from './Level2.tsx'

const Level1 = () => {
  return (
    <FirstContext.Consumer>
      {(contextValue: LevelProps | undefined) => {
        if (!contextValue) {
          return <div>Помилка: значення контексту не визначене</div>
        }

        const { value } = contextValue

        return (
          <div>
            <h2>Level 1: {value}</h2>
            <Level2 />
          </div>
        )
      }}
    </FirstContext.Consumer>
  )
}

export default Level1
