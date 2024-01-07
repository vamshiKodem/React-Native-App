import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ListItem, TextInput} from '@react-native-material/core';
import {filterData} from './filterData';

export const Filter = () => {
  const [input, setInput] = useState('');

  return (
    <>
      <View style={styles.textInputContainer}>
        <TextInput
          variant="outlined"
          label="State Name"
          onChangeText={value => setInput(value)}
          value={input}
        />
      </View>
      <ScrollView>
        {filterData
          .filter(data => data.name.toLowerCase().includes(input.toLowerCase()))
          .map((data, index) => (
            <ListItem
              title={data.abbreviation}
              secondaryText={data.name}
              key={index}
            />
          ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  listEndContainer: {
    paddingBottom: 100,
  },
});
