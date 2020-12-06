import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text>Hello myApp</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
