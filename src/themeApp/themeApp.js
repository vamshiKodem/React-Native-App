import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {useThemeContext} from './themeContext';
import {CustomText} from './customText';

export const ThemeApp = () => {
  const {isDarkMode, changeTheme} = useThemeContext();

  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <View
      style={[styles.container, {backgroundColor: colors[theme].primaryColor}]}>
      <View>
        <CustomText>Change Theme</CustomText>
        <Switch value={isDarkMode} onChange={changeTheme} />
      </View>
      <CustomText>ThemeApp</CustomText>
      <CustomText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium
        ipsam aut deleniti, dolores nisi illum non accusantium nihil vero
        quibusdam. Totam natus quaerat suscipit maiores, nesciunt architecto
        pariatur doloremque!
      </CustomText>
      <CustomText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo tempora
        ex et reiciendis repellat quos eius, dicta nulla, ducimus quaerat,
        quidem vero aliquam distinctio. Voluptatum ut vitae perferendis eos!
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {},
});

const colors = {
  dark: {
    primaryColor: 'black',
    secondaryColor: 'white',
  },
  light: {
    primaryColor: 'white',
    secondaryColor: 'black',
  },
};
