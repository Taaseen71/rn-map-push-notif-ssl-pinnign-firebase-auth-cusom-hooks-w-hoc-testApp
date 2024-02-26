import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {request} from 'src/features/pokemon/pokeSlice';
import {useDispatch, useSelector} from 'react-redux';
import {PokeApi} from 'src/config/WebService';

const PokeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(request({url: PokeApi}));
    console.log('POKEMON DATA ==>', pokemonData);
  }, []);

  const pokemonData = useSelector(state => state.pokemon.pokemons);

  const renderItem = ({item}) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <View>
      <FlatList
        data={pokemonData.results}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default PokeScreen;

const styles = StyleSheet.create({});
