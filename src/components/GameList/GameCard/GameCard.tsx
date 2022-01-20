import React from 'react';
import {Link} from "react-router-dom";
import {Game} from  "../../../util/Types";

interface Props {
    content:Game
}

export const GameCard = ({content}:Props) => {
    const {id,title,thumbnail,genre,short_description} = content;
    const link = `/game/${id}`;
    console.log("loading");

  return (
        <Link to={link}>
                <img src={thumbnail} alt={title} />
                <h2>{title}</h2>
                <p>{short_description}</p>
                <p>{genre}</p>
        </Link>
        )

  export default GameCard