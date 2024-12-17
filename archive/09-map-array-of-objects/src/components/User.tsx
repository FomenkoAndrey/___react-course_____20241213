import { UserInterface } from '../types/User.interface.ts'

const User = ({ id, name, email, username, phone }: UserInterface) => {
  return (
    <div>
      <h3>{id}. {name}</h3>
      <h4>{username}</h4>
      <p>{email}</p>
      <p>{phone}</p>
      <hr />
    </div>
  )
}

export default User
