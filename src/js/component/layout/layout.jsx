import React from "react"
import { Navbar } from "../Navbar.jsx"
import { Jumbotron } from "../Jumbotron.jsx"
import { Card } from "../Card.jsx"

function Layout() {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <div className="row d-flex justify-content-evenly">
                <Card className ms-3 />
                <Card />
                <Card />
                <Card />
            </div>

        </>
    )
}

export default Layout