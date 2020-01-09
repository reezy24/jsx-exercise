import React from "react"
import NavLink from "./NavLink"

const Nav = props => {
    return (
        <nav>
            <ul>
                <NavLink href="#about-me" name="About Me" />
                <NavLink href="#fav-foods" name="Favourite Foods" />
                <NavLink href="#contact" name="Contact Details" />
            </ul>
        </nav>
    )
}

export default Nav