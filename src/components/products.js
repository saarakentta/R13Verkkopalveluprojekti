import React, {useState, useEffect } from "react"
import axios from "axios"
import ProductCard from "./productCard"
//import DropdownMenu from './dropdown'

const Products = () => {
    const [products, setProducts] = useState([])
    const [valittuMerkki, setValittuMerkki] = useState(null)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/products', {
                    params: {
                        merkki: valittuMerkki,
                    }
                })
                setProducts(response.data || [])
            } catch (error) {
                console.error(error)
            }
        }

        getProducts()
    }, [valittuMerkki])

return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
)
}

export default Products