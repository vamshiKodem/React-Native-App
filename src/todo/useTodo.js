import {useState} from 'react';
import {Alert} from 'react-native';

export const useTodo = () => {
  const [list, setList] = useState([{id: 1, name: 'prepare for interview'}]);
  const [inputValue, setInputValue] = useState('');

  const onTextInputChange = value => {
    if (value === ' ') {
      value = value.trim();
    }
    setInputValue(value);
  };

  const onAddButtonPress = () => {
    const newTodo = {
      id: Math.random(),
      name: inputValue.trim(),
    };
    setList([...list, newTodo]);
    setInputValue('');
  };

  const isButtonDisable = !inputValue ? true : false;

  const onClearButtonPress = () => {
    setList([]);
  };

  const onItemPress = id => {
    Alert.alert('Delete', 'Would you like to delete', [
      {
        text: 'Yes',
        onPress: () => {
          const newTodoList = list.filter(list => list.id !== id);
          setList(newTodoList);
        },
      },
      {text: 'No'},
    ]);
  };

  return {
    list,
    isButtonDisable,
    onAddButtonPress,
    onTextInputChange,
    onClearButtonPress,
    inputValue,
    onItemPress,
  };
};
