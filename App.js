import React from 'react';
import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';
import Todo from './src/components/Todo';
const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        // paddingTop: StatusBar.currentHeight,
      }}>
      {/* <View style={styles.header}></View> */}
      <Todo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // header: {
  //   padding: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
});

export default App;
// import React from 'react';
// import 'react-native-gesture-handler';
// import {StyleSheet, Text, View} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';

// import {LogBox} from 'react-native';
// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);

// const Drawer = createDrawerNavigator();

// const Feed = () => {
//   return (
//     <View>
//       <Text>First</Text>
//     </View>
//   );
// };

// const Article = () => {
//   return (
//     <View>
//       <Text>Second</Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="First" component={Feed} />
//         <Drawer.Screen name="Second" component={Article} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
