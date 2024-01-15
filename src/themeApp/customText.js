import {StyleSheet, Text} from 'react-native';
import React from 'react';

import {useThemeContext} from './themeContext';

export const CustomText = ({children}) => {
  const {isDarkMode} = useThemeContext();

  const theme = isDarkMode ? 'dark' : 'light';
  return <Text style={{color: colors[theme].secondaryColor}}>{children}</Text>;
};

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
