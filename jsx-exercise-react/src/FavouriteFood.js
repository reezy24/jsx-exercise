import React from "react"

const FavouriteFood = props => {
    return (
        <div>
            <h4>{props.food}</h4>
            <img src={props.img} />
            <p>Best time to eat: <span>{props.time}</span></p>
            <p>Best place: <span>{props.place}</span></p>
        </div>
    )
}

export default FavouriteFood