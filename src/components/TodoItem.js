import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoItem = ({title, content, isComplete, complete, remove}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={[styles.textTitle, isComplete && styles.titleComplete]}>
          {title}
        </Text>
        <Text style={isComplete && styles.titleComplete}>{content}</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={[styles.button, styles.buttonDelete]}
          onPress={remove}>
          <Icon name="delete" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonDone]}
          onPress={complete}>
          <Icon name="done" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

TodoItem.defaultProps = {
  title: 'Имя задачи',
  content: 'Текст задачи',
  isComplete: false,
  complete: () => {},
  remove: () => {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  containerText: {
    width: 260,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    //color: 'black',
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    width: 40,
    height: 40,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 12,
    // paddingVertical: 6,
    borderRadius: 20,
  },
  buttonDelete: {backgroundColor: '#E53935'},
  buttonDone: {backgroundColor: '#8BC34A'},
  titleComplete: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
