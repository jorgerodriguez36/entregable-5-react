import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom';
import '../pages/styles/pokeIdPage.css'


const PokeIdPage = () => {

    const [ pokeData, getPokeData] = useFetch();
    const param = useParams();

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`;
        getPokeData(url);
    }, []);

    console.log(pokeData);
    
    return (
        <div className='idPage_container'>
            <article className='pokeid_card'>
                <img src={pokeData?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
                <h3>{pokeData?.name.charAt(0).toUpperCase() + pokeData?.name.slice(1)}</h3>
                <p>Tipo</p>
                <ul className='id_page'>
                    {
                    pokeData?.types.map(type => (
                        <li key={type.type.url} className={`slot${type.slot}`}>
                                {type.type.name}</li>
                    ))
                    }
                </ul>
                <p>Habilidades</p>
                <ul className='id_page'>
                    {
                    pokeData?.abilities.map(ability => (
                        <li key={ability.ability.url} className={`slot${ability.slot}`}>
                            {ability.ability.name}</li>
                    ))
                    }
                </ul>
                
                    <hr />
                    <h3>Stats</h3>
                    <ul className='poke_stats'>
                        {
                        pokeData?.stats.map(stat => (
                            !stat.stat.name.includes('special') &&
                            <li key={stat.stat.url}>
                            <div className='stat-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span className="stat-name">{stat.stat.name} </span>
                                <span className="stat-value right-aligned">{stat.base_stat}</span>
                                </div>
                                <div className="stat-bar-bg">
                                <div className="stat-bar" style={{ width: `${(stat.base_stat / 150) * 100}%` }}></div></div>     </li>
                            ))
                        }
                </ul>
            </article>
        </div>
    )
}

export default PokeIdPage;