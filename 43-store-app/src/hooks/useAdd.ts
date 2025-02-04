import { useState } from 'react'
import axios from 'axios'
import { ProductInterface } from '../types/Product.interface'

export const useAdd = (url: string) => {
  const [error, setError] = useState<string | null>(null)

  const add = async (data: Partial<ProductInterface>) => {
    try {
      const response = await axios.post(url, data)
      return response.data
    } catch (error) {
      setError(`Error adding product: ${error}`)
    }
  }

  return { add, error }
}
