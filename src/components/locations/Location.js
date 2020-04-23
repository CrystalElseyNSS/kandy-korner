import React from "react"
import "./Location.css"

export default (props) => (
    <section className="location">
        <h4 className="location__name">Store: {props.location.name}</h4>
        <address className="location__address">Address: {props.location.address}</address>
        <div className="location__squareFt">Size: {props.location.squareFt} sq ft</div>
        <div className="location__accessible">Wheelchair Accessible: {props.location.handicapAccessible ? "Yes" : "No"}</div>
    </section>
)