import React from "react"

const NavLink = props => {
    return (
        <li><a href={props.href}>{props.name}</a></li>
    )
}

export default NavLink
