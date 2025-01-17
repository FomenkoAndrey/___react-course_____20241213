import { useForm } from 'react-hook-form'

type FormData = {
  login: string
  password: string
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <input
          id="login"
          type="text"
          {...register('login', {
            required: 'This is required',
            minLength: { value: 3, message: 'Login must be at least 3 characters' },
            maxLength: { value: 15, message: 'Login must not be greater than 15 characters' }
          })}
          autoComplete="username"
          name="login"
        />
        {errors.login && <div className="error">{errors.login.message}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'This is required',
            minLength: { value: 5, message: 'Password must be at least 5 characters' },
            maxLength: { value: 20, message: 'Password must not be greater than 20 characters' }
          })}
          autoComplete="current-password"
          name="password"
        />
        {errors.password && <div className="error">{errors.password.message}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm
