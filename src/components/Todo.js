import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DataTodoItem} from '../DataTodoItem';
import InputItem from './InputItem';
import TodoList from './TodoList';
import {COLORS} from '../Colors';
import Header from './Header';

const Todo = () => {
  const [todoItems, setTodoItems] = useState(() => DataTodoItem);

  const [textTitleInput, setTextTitleInput] = useState('');
  const changeTextTitle = text => setTextTitleInput(text);

  const [textInput, setTextInput] = useState('');
  const changeText = text => setTextInput(text);

  const addTodoItem = () => {
    if (textInput.length > 0 && textTitleInput.length > 0) {
      setTodoItems([
        ...todoItems,
        {
          id: Math.random(),
          title: textTitleInput,
          content: textInput,
          isComplete: false,
        },
      ]);
    } else {
      Alert.alert('Error', 'Введите название и текст задачи');
    }
    setTextTitleInput('');
    setTextInput('');
    Keyboard.dismiss();
  };

  const completeTodoItem = id =>
    setTodoItems(
      todoItems.map(todoItems =>
        todoItems.id === id
          ? {...todoItems, isComplete: !todoItems.isComplete}
          : todoItems,
      ),
    );

  const removeTodoItem = id =>
    setTodoItems(todoItems.filter(todoItems => todoItems.id !== id));

  const clearAllTodos = () => {
    Alert.alert('Confirm', 'Очистить список?', [
      {
        text: 'Да',
        onPress: () => setTodoItems([]),
      },
      {
        text: 'Нет',
      },
    ]);
  };

  return (
    <View style={styles.Container}>
      <Header clearList={clearAllTodos} />

      <TodoList
        todoItems={todoItems}
        completeTodoItem={completeTodoItem}
        removeTodoItem={removeTodoItem}
      />

      <InputItem
        value1={textTitleInput}
        onChangeText1={changeTextTitle}
        value2={textInput}
        onChangeText2={changeText}
        addTodoItem={addTodoItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Todo;
