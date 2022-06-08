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
import TodoList from './TodoList';

const InputItem = ({
  value1,
  onChangeText1,
  value2,
  onChangeText2,
  addTodoItem,
}) => {
  return (
    <View>
      {/* style={styles.Container}> */}
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Имя задачи..."
            value={value1} // 1
            maxLength={20}
            onChangeText={onChangeText1} // 2
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
            returnKeyType="next"
            blurOnSubmit={false}
          />
          <TextInput
            placeholder="Текст задачи..."
            value={value2} // 3
            multiline={true}
            numberOfLines={3}
            onChangeText={onChangeText2} //4
            onSubmitEditing={addTodoItem} // 5
            ref={input => {
              this.secondTextInput = input;
            }}
          />
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={addTodoItem}>
          {/* // 5 */}
          <Icon name="add" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    height: 130,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: '#fff',
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#8BC34A',
    elevation: 40,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputItem;