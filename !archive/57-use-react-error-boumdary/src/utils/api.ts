import axios from 'axios'
import { UserInterface } from '../types/user.interface.ts'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchDataWithFallback: Promise<UserInterface[]> = axios
  .get<UserInterface[]>(API_URL)
  .then((response) => new Promise<UserInterface[]>((resolve) => setTimeout(() => resolve(response.data), 2000)))
  .catch((error: unknown) => {
      if (axios.isAxiosError(error)) {
        throw new Error(`Error fetching data: ${error.message}`)
      }
      throw new Error('Unknown error occurred')
    }
  )
