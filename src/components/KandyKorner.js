import React from "react"

import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"

export default () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Life is short: Eat your sweeties!</small>

        <address>
            <div>Visit Us at our East Nashville location</div>
            <div>500 Woodland Street</div>
        </address>

        <address>
            <div>Visit Us at our West Nashville location</div>
            <div>3600 Charlotte Ave</div>
        </address>

        <h2>Locations</h2>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
    </>
)