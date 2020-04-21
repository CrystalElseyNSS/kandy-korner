import React from "react"
import "./KandyKorner.css"

import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"
import { ProductTypeProvider } from "./products/ProductTypeProvider"

export default () => (
    <>
        <h2 className="pageHeader">🍬 🍬 🍬 Kandy Korner 🍬 🍬 🍬</h2>
        
        <h3 className="sectionHeader">Locations</h3>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        
        <h3 className="sectionHeader">Products</h3>
            <ProductProvider>
                <ProductTypeProvider>
                    <ProductList />      
                </ProductTypeProvider>      
            </ProductProvider>
    </>
)