import React from "react"
import "./Employee.css"

export default (props) => (
    <section className="employee">
        <h4 className="employee__name">Name: {props.employee.name}</h4>
        <div className="employee__location">Store: {props.location.name}</div>
        <div className="employee__manager">Manager? {props.employee.manager ? "Yes" : "No"}</div>
        <div className="employee__availability">Full Time? {props.employee.fullTime ? "Yes" : "No"}</div>
        <div className="employee__pay">Hourly Pay: ${props.employee.pay}</div>
    </section>
)