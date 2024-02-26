import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {request} from 'src/features/pokemon/pokeSlice';

const useFetchPokemon = url => {
  //   const [pokeData, setPokeData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(request({url: url}));
    // console.log('POKEMON DATA ==>', pokeData);
  }, [url]);

  return useSelector(state => state.pokemon.pokemons);
};

export default useFetchPokemon;
