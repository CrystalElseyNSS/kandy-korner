import React, { useState, useEffect } from "react"

export const PurchaseContext = React.createContext()

export const PurchaseProvider = (props) => {
    const [purchases, setPurchases] = useState([])
    const [purchaseSearchTerm, setPurchaseSearchTerm] = useState("")

    const getPurchases = () => {
        return fetch("http://localhost:8089/purchases")
            .then(res => res.json())
            .then(setPurchases)
    }

    const addPurchase = purchase => {
        return fetch("http://localhost:8089/purchases", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchase)
        })
        .then(getPurchases)
    }

    useEffect(() => {
        getPurchases()
    }, [])

    useEffect(() => {
        console.log("****  PURCHASE APPLICATION STATE CHANGED  ****")
    }, [purchases])

    return (
        <PurchaseContext.Provider value={{
            purchases, addPurchase,
            purchaseSearchTerm, setPurchaseSearchTerm
        }}>
            {props.children}
        </PurchaseContext.Provider>
    )
}