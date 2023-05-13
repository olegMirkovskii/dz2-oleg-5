import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const PokiCard = ({i}) => {
    const [img, setImg] = useState('')

    useEffect(() => {
        fetch(i.url)
            .then(res => res.json())
            .then(data => setImg(data?.sprites?.other?.dream_world?.front_default))
    })
    return (
        <div>
            <Link to={`/about/${i?.name}`}>
                <span>{i?.name}</span>
                <img style={{width: 150, height: 150}} src={img} alt=""/>
            </Link>
        </div>
    );
};

export default PokiCard;