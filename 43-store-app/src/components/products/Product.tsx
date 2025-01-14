import { ProductInterface } from '../../types/Product.interface.ts'
import { FaTrash } from 'react-icons/fa6'
import { FaEdit } from 'react-icons/fa'
import axios from 'axios'
import { API_URL } from '../../utils/mockapi.ts'

interface ProductProps {
  product: ProductInterface,
  reload: () => void
}

const Product = (
  { product: { id, name, description, category, price, image }, reload }: ProductProps
) => {
  const handleDeleteProduct = async () => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`)
      console.log('Product deleted:', response.data)
      reload()
    } catch (error) {
      console.log('Error deleting product:', (error as Error).message)
    }
  }

  return (
    <li className="product-item">
      <h2 className="product-item__title">{name}</h2>
      <p className="product-item__description">${description}</p>
      <p className="product-item__category">${category}</p>
      <p className="product-item__price">${price}</p>
      <img className="product-item__image" src={image} alt={name} />
      <div className="product-item__actions">
        <button className="product-item__delete" onClick={handleDeleteProduct}>
          <FaTrash />
        </button>
        <button className="product-item__edit">
          <FaEdit />
        </button>
      </div>
    </li>
  )
}

export default Product
