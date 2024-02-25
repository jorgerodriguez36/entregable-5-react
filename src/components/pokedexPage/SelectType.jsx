import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import { setPokemonName } from '../../store/slices/pokemonName.slice';
import { useDispatch } from 'react-redux';

const SelectType = ({setSelectValue}) => {

    const dispatch = useDispatch();
    const [ types, getTypes ] =useFetch();

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type';
        getTypes(url);
    }, []);

    const textSelect = useRef();

    const handleChange = () => {
        setSelectValue(textSelect.current.value);
        dispatch(setPokemonName(''));
    }

    return (
        <select onChange={handleChange} ref={textSelect}>
            <option value="allPokemons">all Pokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    )
}

export default SelectType