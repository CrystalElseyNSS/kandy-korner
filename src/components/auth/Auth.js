import React from "react"
import Login from "./Login"
import Register from "./Register"
import "./Auth.css"

export default ({toggle}) => {
    return (
        <>
            <main className="authContainer">
                <header className="headerContainer">
                    <h1 className="header--name">Kandy Korner</h1>
                    <h2 className="header--tagline">"Life is Short, Eat Your Sweeties"</h2>
                </header>
                <Login toggle={toggle} />
                <Register toggle={toggle} />
            </main>
        </>
    )
}