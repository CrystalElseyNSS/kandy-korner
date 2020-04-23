import React from "react"
import "./Product.css"

export default (props) => (
    <section className="product">
        <h4 className="product__name">Candy Name: {props.product.name}</h4>
        <div className="product__price">Price: {props.product.price}</div>
        {/* <div className="product__type">Category: {props.productType.type}</div> */}
    </section>
)