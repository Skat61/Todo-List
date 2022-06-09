import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../Colors';

const Header = clearList => {
  return (
    <View style={styles.header}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 21,
          color: '#616161',
        }}>
        TODO APP
      </Text>
      <Icon
        name="delete"
        size={25}
        color={COLORS.red}
        onPress={() => clearList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    elevation: 12,
  },
});

export default Header;
