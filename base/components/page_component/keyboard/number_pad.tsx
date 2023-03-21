import React from 'react';
import {dataKeyboard} from './data_keyboard';
import {colorTextTitle} from '../../../color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  number: string;
  maxLength: number;
  setNumber: Function;
};

const NumberPad = ({setNumber, number, maxLength}: Props) => {
  const handleClick = (item: any) => {
    if (number.length >= maxLength && item.value != 'delete') return;
    if (item.value == 'empty') return;
    if (item.value == 'delete') return deleteLastCharacter();
    return addLastCharacter(item);
  };

  const deleteLastCharacter = () => {
    setNumber((prev: string) => prev.slice(0, -1));
  };

  const addLastCharacter = (item: any) => {
    setNumber((prev: string) => prev + item.value);
  };

  const renderItem = ({item}: {item: any}) => {
    const isEmpty = item.value === 'empty';
    const isDelete = item.value === 'delete';
    const text = <Text style={styles.text}>{item.value}</Text>;
    const icon = (
      <Ionicons size={30} color={colorTextTitle} name="ios-backspace-outline" />
    );

    return (
      <TouchableOpacity
        style={styles.boxInput}
        onPress={() => handleClick(item)}>
        {isEmpty ? null : isDelete ? icon : text}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        key={'#'}
        numColumns={3}
        data={dataKeyboard}
        renderItem={renderItem}
        keyExtractor={item => '#' + item.id}
      />
    </View>
  );
};

export default NumberPad;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colorTextTitle,
  },
  boxInput: {
    flex: 1,
    height: 70,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  container: {
    height: 280,
    width: '100%',
  },
});
