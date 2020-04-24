import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import PurchaseList from "../purchases/PurchaseList"
import "./Product.css"

export default (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const constructNewPurchase = () => {
        const purchasedProductId = props.product.id
        const purchasingCustomerId = parseInt(localStorage.getItem("kandy_customer"))     
        
        const newPurchase = {
            productId: purchasedProductId,                
            customerId: purchasingCustomerId
        }
        return newPurchase
        .then(props.toggler)
    }

    return (
        <>
            <section className="product">
                <h4 className="product__name">Candy Name: {props.product.name}</h4>
                <div className="product__price">Price: {props.product.price}</div>
            
                <div onClick={toggle}>
                    <Button onclick={e => {
                        e.preventDefault()
                        constructNewPurchase()
                    }}>Purchase</Button>{' '}
                </div>

                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        <p>Your Order:</p>
                    </ModalHeader>
                    <ModalBody>
                        <PurchaseList toggler={toggle} />
                    </ModalBody>
                </Modal>
            </section>
        </>
    )
}