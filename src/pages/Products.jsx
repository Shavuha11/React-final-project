import { useEffect, useState } from 'react'

import {
    Link,
    useSearchParams
} from 'react-router-dom'

import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default function Products() {

    const [products, setProducts] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const [error, setError] = useState(null)

    const [searchParams, setSearchParams] =
        useSearchParams()

    const page =
        Number(searchParams.get('page')) || 1

    useEffect(() => {

        async function fetchProducts() {

            try {

                setIsLoading(true)

                setError(null)

                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
                )

                if (!response.ok) {
                    throw new Error('Server Error')
                }

                const data = await response.json()

                setProducts(data)

            } catch (error) {

                setError(error.message)

            } finally {

                setIsLoading(false)

            }

        }

        fetchProducts()

    }, [page])

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <ErrorMessage />
    }

    return (

        <div className="page">

            <h1>Products Page</h1>

            <h2>Current Page: {page}</h2>

            {
                products.map(product => (

                    <div
                        key={product.id}
                        className="product-card"
                    >

                        <h3>{product.title}</h3>

                        <Link
                            className="card-link"
                            to={`/product/${product.id}`}
                        >
                            Open Details
                        </Link>

                    </div>

                ))
            }

            <button
                className="btn"
                onClick={() =>
                    setSearchParams({
                        page: page - 1
                    })
                }

                disabled={page === 1}
            >
                Prev
            </button>

            <button
                className="btn"
                onClick={() =>
                    setSearchParams({
                        page: page + 1
                    })
                }
            >
                Next
            </button>

        </div>

    )

}