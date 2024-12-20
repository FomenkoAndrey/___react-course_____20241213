import { FormEvent } from 'react'

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement
  password: HTMLInputElement
}

interface LoginFormElements extends HTMLFormElement {
  elements: FormElements
}

const LoginForm = () => {
  const handleFormSubmit = (e: FormEvent<LoginFormElements>) => {
    e.preventDefault()
    const form = e.currentTarget
    console.log(form.elements.username.value)
    console.log(form.elements.password.value)
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" id="username" className="form-control" name="username" placeholder="Username" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="text" id="password" className="form-control" name="password" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}

export default LoginForm
