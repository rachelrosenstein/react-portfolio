import React from "react";
import "../style.css"

const repo_card_style = {
    cardWidth: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "75%",
    }
}

export const RepoCard = (props) =>
    <div className="card" style={repo_card_style.cardWidth}>
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
            <p className="card-text"><a href={props.github} target="_blank">Github Link</a></p>
            <p className="card-text"><a href={props.heroku} target="_blank"> Deployed Link </a></p>
            <p className="card-text">{props.description}</p>
        </div>
    </div>

