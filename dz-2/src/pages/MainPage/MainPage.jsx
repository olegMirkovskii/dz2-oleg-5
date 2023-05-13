import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokiCard from "../../components/PokiCard/PokiCard.jsx";
const link = 'https://pokeapi.co/api/v2/pokemon/'

const MainPage = () => {
    const [lists, setLists] = useState([])

    const getPoki = async () => {
        const {data} = await axios.get(link)
        return setLists(data)
    }

    useEffect(() => {
        getPoki()
    }, [])
    return (
        <div>
            {
                lists?.results?.map(i => <PokiCard i={i}/>)
            }
        </div>
    );
};

export default MainPage;