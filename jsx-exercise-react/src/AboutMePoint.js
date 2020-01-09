import React from "react"

const AboutMePoint = props => {
    return (
        <li>
            <p>
                <b>{props.firstWord}</b> {props.remainingText}
            </p>
        </li>
    )
}

export default AboutMePoint