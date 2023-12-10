import {View, FlatList, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {ListItem, TextInput, Button} from '@react-native-material/core';
import {useTodo} from './useTodo';

export const Todo = () => {
  const {
    list,
    isButtonDisable,
    onAddButtonPress,
    onTextInputChange,
    onClearButtonPress,
    inputValue,
    onItemPress,
  } = useTodo();

  console.log(list);

  return (
    <View style={styles.container}>
      <TextInput
        variant="outlined"
        placeholder="Add TODO"
        onChangeText={onTextInputChange}
        value={inputValue}
      />
      <Button
        title="Add"
        disabled={isButtonDisable}
        style={styles.Button}
        onPress={onAddButtonPress}
      />
      <Button
        title="Clear all"
        style={styles.Button}
        onPress={onClearButtonPress}
      />
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <ListItem
            title={item.name}
            key={index}
            onPress={() => onItemPress(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  Button: {
    marginTop: 10,
  },
});
