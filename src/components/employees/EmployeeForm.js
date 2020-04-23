import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const location = useRef()
    const pay = useRef()
    const manager = useRef()
    const fullTime = useRef()

    const constructNewEmployee = () => {
        const isManager = (manager.current.value === "Yes" ? true : false)
        const isFullTime = (fullTime.current.value === "Yes" ? true : false)
        const locationId = parseInt(location.current.value)
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: name.current.value,
                locationId: locationId,
                pay: parseInt(pay.current.value),
                manager: isManager,
                fullTime: isFullTime
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="employeeForm">  

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeForm--name">Employee Name: </label>
                    <input
                        type="text"
                        id="employeeForm--name"
                        ref={name}
                        required
                        className="form-control"
                        placeholder="Ex: Elizabeth Smith"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeForm--location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeForm--location"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeForm--manager">Manager? </label>
                    <select
                        defaultValue=""
                        name="manager"
                        ref={manager}
                        id="employeeForm--manager"
                        className="form-control"
                    >
                        <option>Yes</option>
                        <option>No</option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeForm--fullTime">Full Time? </label>
                    <select
                        defaultValue=""
                        name="fullTime"
                        ref={fullTime}
                        id="employeeForm--fullTime"
                        className="form-control"
                    >
                        <option>Yes</option>
                        <option>No</option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeForm--pay">Hourly Pay: </label>
                    <input
                        type="text"
                        id="employeeForm--pay"
                        ref={pay}
                        required
                        className="form-control"
                        placeholder="Ex: 10"
                    />
                </div>
            </fieldset>

            <button type="submit" onClick={evt => {
                evt.preventDefault()
                constructNewEmployee()}}
                className="employeeForm--submitBtn btn-info">
                Save Employee
            </button>

        </form>
    )
}