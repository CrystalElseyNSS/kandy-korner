import React from "react"
import "./KandyKorner.css"

import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"
import { ProductTypeProvider } from "./products/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"

export default () => (
    <>
        <h2 className="pageHeader">🍬 🍬 🍬 Kandy Korner 🍬 🍬 🍬</h2>
        
        <ProductProvider>
            <EmployeeProvider>
                <LocationProvider>
                    <ProductTypeProvider>
                        <LocationList />
                        <ProductList />                        
                        <EmployeeList />
                    </ProductTypeProvider>
                </LocationProvider>
            </EmployeeProvider>
        </ProductProvider>

    </>
)