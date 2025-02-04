import { useState } from 'react'
import axios from 'axios'
import { ProductInterface } from '../types/Product.interface'

export const useUpdate = (url: string) => {
  const [error, setError] = useState<string | null>(null)

  const update = async (data: ProductInterface) => {
    try {
      const response = await axios.put(`${url}/${data.id}`, data)
      return response.data
    } catch (error) {
      setError(`Error updating product: ${error}`)
    }
  }

  return { update, error }
}
