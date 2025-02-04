import { FormEvent, useState } from 'react'
import { ProductInterface } from '../types/Product.interface'
import { PRODUCT_CATEGORIES } from '../data/mockData'
import InputField from './InputField'
import SelectField from './SelectField'

interface ProductFormProps {
  onSubmit: (product: ProductInterface) => void
  product: ProductInterface
}

const ProductForm = ({ onSubmit, product }: ProductFormProps) => {
  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price)
  const [image, setImage] = useState(product.image)
  const [category, setCategory] = useState(product.category)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const returnedProduct: ProductInterface = {
      id: product?.id || '',
      name,
      description,
      price,
      image,
      category
    }

    onSubmit(returnedProduct)

    setName('')
    setDescription('')
    setPrice(0)
    setImage('https://loremflickr.com/640/480/random')
    setCategory('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" />

      <InputField
        id="description"
        textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter product description"
      />

      <InputField
        id="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Enter product price"
      />

      <InputField
        id="image"
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Enter product image URL"
      />

      <SelectField
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        options={PRODUCT_CATEGORIES}
      />

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  )
}

export default ProductForm
