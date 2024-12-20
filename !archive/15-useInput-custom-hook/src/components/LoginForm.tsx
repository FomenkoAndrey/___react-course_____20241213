import { ChangeEvent, FormEvent, useState } from 'react'

function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  }
}

const LoginForm = () => {
  const username = useInput('')
  const password = useInput('')

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      username: username.value,
      password: password.value
    })
  }
  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" id="username" className="form-control" name="username"
               placeholder="Username" {...username} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="text" id="password"
               className="form-control" name="password"
               placeholder="Password" {...password} />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}

export default LoginForm
