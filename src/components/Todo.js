import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputItem from './InputItem';
import TodoList from './TodoList';

const Todo = () => {
  const [todoItems, setTodoItems] = useState(() => [
    {
      id: Math.random(),
      title: 'Задача 1',
      content: 'какой-то текст 1',
      isComplete: false,
    },
    {
      id: Math.random(),
      title: 'Задача 2',
      content: 'какой-то текст 2',
      isComplete: true,
    },
    {
      id: Math.random(),
      title: 'Задача 3',
      content: 'какой-то текст 3',
      isComplete: false,
    },
  ]);

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
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 21,
            color: '#616161',
          }}>
          TODO APP
        </Text>
        <Icon name="delete" size={25} color="#E53935" onPress={clearAllTodos} />
      </View>
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
  header: {
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    elevation: 12,
  },
});

export default Todo;
