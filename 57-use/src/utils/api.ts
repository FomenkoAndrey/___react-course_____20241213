import axios from 'axios'
import { UserInterface } from '../types/user.interface.ts'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchDataWithFallback: Promise<UserInterface[]> = axios
  .get<UserInterface[]>(API_URL)
  .then((response) => new Promise<UserInterface[]>((resolve) => setTimeout(() => resolve(response.data), 2000)))
  .catch(() => [
    {
      id: 0,
      name: 'Error fetching data',
      username: 'error',
      email: 'error@example.com'
    }
  ])

// export const fetchData: Promise<UserInterface[]> = new Promise(async (resolve, reject) => {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     const response = await axios.get(API_URL)
//     resolve(response.data)
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       reject(new Error(`Error fetching data: ${error.message}`))
//     }
//     reject(new Error('Unknown error occurred'))
//   }
// })
