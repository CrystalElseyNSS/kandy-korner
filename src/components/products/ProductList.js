import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import { ProductTypeContext } from "./ProductTypeProvider"


export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)
    return (
        <>
            <article className="productContainer">

                <header className="product__header">
                    <h2 className="product__heading">Products</h2>
                </header>

                <section className="product__list">
                    {products.map(product => {
                    const foundType = productTypes.find(productType => productType.id === product.productTypeId)
                    return <Product key={product.id} product={product} productType={foundType}/>})}    
                </section>

            </article>
        </>
    )
}