import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import { ProductTypeContext } from "./ProductTypeProvider"


export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)
    return (
        <section className="products">
        {
            products.map(product => {
            const foundType = productTypes.find(productType => productType.id === product.productTypeId)
            return <Product key={product.id} product={product} productType={foundType}/>})
        }    
        </section>
    )
}