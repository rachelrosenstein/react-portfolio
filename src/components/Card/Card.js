import React from "react";
import "../style.css"

const repo_card_style = {
    cardWidth: {
        width: "700px",
        padding: "30px"
    }
}

export const RepoCard = (props) =>
    <div className="card" style={repo_card_style.cardWidth}>
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
            <p className="card-text"><a href={props.github} target="_blank">Github</a></p>
            <p className="card-text">{props.heroku}</p>
            <p className="card-text">{props.description}</p>
        </div>
    </div>

