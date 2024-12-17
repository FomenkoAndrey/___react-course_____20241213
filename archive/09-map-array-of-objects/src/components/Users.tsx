import { UserInterface } from '../types/User.interface.ts'
import User from './User.tsx'
import { MOCK_USERS } from '../data/mock-users.ts'

const users: UserInterface[] = MOCK_USERS

const Users = () => {
  return (
    <div>
      {users.map((user: UserInterface) => {
        return <User key={user.id} {...user} />
      })}
    </div>
  )
}

export default Users

/*
   {users.map(({ id, name, email, username }: UserInterface) => {
     return <User key={id} id={id} name={name} email={email} username={username} />
   })}
*/
