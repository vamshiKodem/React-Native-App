import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Switch,
  useColorScheme,
} from 'react-native';
import {ListItem, TextInput} from '@react-native-material/core';
import {filterData} from './filterData';

export const Filter = () => {
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState(false);
  const currentMode = useColorScheme();

  return (
    <>
      <Switch value={theme} onChange={() => setTheme(!theme)} />
      <View
        style={[
          styles.textInputContainer,
          {
            backgroundColor: colors[currentMode],
          },
        ]}>
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
