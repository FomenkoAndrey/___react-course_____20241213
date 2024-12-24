import styled from 'styled-components'
import { ReactNode, useEffect } from 'react'

const GLOBAL_COLOR = 'red'

const Button = styled.button`
  background-color: purple;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: darkviolet;
  }
`
const StyledHeader = styled.header`
  background-color: ${GLOBAL_COLOR};
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
`

const Header = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    console.log('Header Component mounted')
  }, [])
  return (
    <StyledHeader>{children}</StyledHeader>
  )
}


const App = () => {
  return (
    <div>
      <Header>Це заголовок блока Header</Header>
      <Button>Наведи курсор</Button>
    </div>
  )
}

export default App
