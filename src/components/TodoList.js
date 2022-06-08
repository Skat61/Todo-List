import React from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import TodoItem from './TodoItem';

// const todoItems = [
//   {id: 1, title: 'Задача 1', isComplete: true},
//   {id: 2, title: 'Задача 2', isComplete: false},
//   {id: 3, title: 'Задача 3', isComplete: false},
// ];

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
    //  <SafeAreaView>
    //    {todoItems.map(item => (
    //      <TodoItem
    //        key={item.id}
    //        title={item.title}
    //        isComplete={item.isComplete}
    //      />
    //    ))}
    //  </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TodoList;
