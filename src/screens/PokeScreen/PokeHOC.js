import {Text, FlatList, View} from 'react-native';
import React from 'react';
import useFetchPokemon from 'src/hooks/CustomPokeHook';
import {PokeApi} from 'src/config/WebService';

const PokeHoc = () => {
  const pokeData = useFetchPokemon(PokeApi);

  console.log('POKEHOC RESULTS ==>', pokeData);

  const renderItem = ({item}) => {
    return <Text>{item?.name}</Text>;
  };

  return (
    <View>
      <FlatList
        data={pokeData?.results}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default PokeHoc;
