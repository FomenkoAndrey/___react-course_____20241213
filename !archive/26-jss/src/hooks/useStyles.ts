import { createUseStyles } from 'react-jss'

const GLOBAL_COLOR = 'white'

export const useStyles = createUseStyles({
  button: {
    padding: '10px 20px',
    background: 'linear-gradient(45deg, blue, red)',
    border: 'none',
    borderRadius: '5px',
    fontSize: '24px',
    color: GLOBAL_COLOR,
    '&:hover': {
      background: 'linear-gradient(45deg, orange, green)'
    }
  },
  label: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: '24px'
  }
})
