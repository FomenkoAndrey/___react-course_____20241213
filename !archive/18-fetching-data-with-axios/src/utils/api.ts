import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchData = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.message}`)
    }
    throw new Error('Unknown error occurred')
  }
}

// ! fetching data with fetch
// export const fetchData = async () => {
//   try {
//     await new Promise(resolve => setTimeout(resolve, 2000))
//     const response = await fetch(API_URL)
//     if (!response.ok) {
//       throw new Error('Failed to fetch')
//     }
//     return response.json()
//   } catch (error) {
//     throw new Error('Failed to fetch data')
//   }
// }
