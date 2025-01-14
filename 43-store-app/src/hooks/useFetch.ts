import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = <T>(url: string, limit?: number, reload?: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // TODO: Винести видалення продукту в окремий код....

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true)


      try {
        await new Promise(resolve => setTimeout(resolve, 200))
        const response = await axios.get<T[]>(limit ? `${url}?_limit=${limit}` : url)

        if (response.status !== 200) {
          throw new Error(`Error: Request failed with status code ${response.status}`)
        }

        setData(response.data as T[])
      } catch (error) {
        setError(`Error fetching data: ${(error as Error).message}`)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsers().catch((error) => console.log('Error fetching data:', error.message))
  }, [url, limit, reload])

  return { data, error, isLoading }
}
