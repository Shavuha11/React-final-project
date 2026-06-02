import {
    useParams
} from 'react-router-dom'

import {
    useEffect,
    useState
} from 'react'

import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default function ProductDetails() {

    const { id } = useParams()

    const [product, setProduct] = useState(null)

    const [isLoading, setIsLoading] =
        useState(true)

    const [error, setError] =
        useState(null)

    useEffect(() => {

        async function fetchProduct() {

            try {

                setIsLoading(true)

                setError(null)

                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                )

                if (!response.ok) {
                    throw new Error('Server Error')
                }

                const data = await response.json()

                setProduct(data)

            } catch (error) {

                setError(error.message)

            } finally {

                setIsLoading(false)

            }

        }

        fetchProduct()

    }, [id])

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <ErrorMessage />
    }

    return (

        <div className="page product-details">

            <h1>Product Details</h1>

            <h2>ID: {product.id}</h2>

            <h3>{product.title}</h3>

            <p>{product.body}</p>

        </div>

    )

}