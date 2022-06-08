import React from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todoItems, removeTodoItem, completeTodoItem}) => {
  return (
    <FlatList
      data={todoItems}
      renderItem={({item}) => (
        <TodoItem
          title={item.title}
          content={item.content}
          isComplete={item.isComplete}
          complete={() => completeTodoItem(item.id)}
          remove={() => removeTodoItem(item.id)}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({});

export default TodoList;
