import { ProductInterface } from '../types/Product.interface'
import Loading from '../Loading'
import { useFetch } from '../hooks/useFetch'
import { API_ITEMS_PER_PAGE_LIMIT, createUrl } from '../utils/mockapi.ts'
import { useState } from 'react'
import Product from '../components/products/Product.tsx'

const Products = () => {
  const [page, setPage] = useState(1)
  const [reload, setReload] = useState('0')
  const {
    data: products,
    error,
    isLoading
  } = useFetch<ProductInterface>(createUrl(page), undefined, reload)

  return (
    <div>
      <h1>Products Page</h1>

      {isLoading && <Loading />}
      {error && <h2 className="error">{error}</h2>}

      <div>
        <div className="pagination">
          <button disabled={page === 1}
                  onClick={() => setPage((prevState) => prevState - 1)}>
            Prev
          </button>
          <button disabled={products.length < API_ITEMS_PER_PAGE_LIMIT}
                  onClick={() => setPage((prevState) => prevState + 1)}>
            Prev
          </button>
        </div>

        <ul className="products-list">
          {!!products.length && products.map(product => (
            <Product product={product} key={product.id} reload={() => setReload(product.id)} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Products
