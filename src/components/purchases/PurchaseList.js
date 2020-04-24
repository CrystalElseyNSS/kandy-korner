import React, { useContext } from "react"
import { PurchaseContext } from "./PurchaseProvider"
import { ProductContext } from "../products/ProductProvider"
import Product from "../products/Product"


export default () => {
    const { purchases } = useContext(PurchaseContext)
    const { products } = useContext(ProductContext)
    const currentCustomer = parseInt(localStorage.getItem("kandy_customer")) 
    const currentCustomerPurchases = purchases.filter(purchase => currentCustomer.id === purchase.customerId)
    const productsPurchasedThisTransaction = currentCustomerPurchases.map(purchase => products.find(product => purchase.productId === product.id))

    
    return (
        <>
            <article className="purchaseContainer">

                <header className="purchase__header">
                    <h2 className="purchase__heading">Your Order:</h2>
                </header>

                <section className="purchase__list">
                    {productsPurchasedThisTransaction.map(product => <Product key={product.id} purchase={product} />)}    
                </section>

            </article>
        </>
    )
}





