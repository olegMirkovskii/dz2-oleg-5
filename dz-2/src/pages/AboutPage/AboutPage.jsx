import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
const link = 'https://pokeapi.co/api/v2/pokemon/'

const AboutPage = () => {
    const [list, setList] = useState({})
    const {id} = useParams()

    const getPoki = async () => {
        const {data} = await axios.get(link+id)
        return setList(data)
    }

    useEffect(() => {
        getPoki()
    }, [])
    return (
        <div>
            <h2>{list?.name}</h2>
            <img src={list?.sprites?.other?.dream_world?.front_default} alt=""/>
        </div>
    );
};

export default AboutPage;