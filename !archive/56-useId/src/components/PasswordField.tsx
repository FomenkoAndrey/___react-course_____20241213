import { useId } from 'react'

const PasswordField = () => {
  const hintId = useId()
  const inputId = useId()

  console.log(hintId)
  console.log(inputId)

  return (
    <>
      <label htmlFor={inputId}>Password:</label>
      <input id={inputId} type="password" aria-describedby={hintId} />
      <p id={hintId}>The password should contain at least 18 characters</p>
    </>
  )
}

export default PasswordField
