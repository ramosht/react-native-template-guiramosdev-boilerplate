import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PageWithinA from '@pages/PageWithinA';
import BottomBar from './BottomBar';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomBar} />
      <Stack.Screen name="PageA" component={BottomBar} />
      <Stack.Screen name="PageB" component={BottomBar} />

      <Stack.Screen name="PageWithinA" component={PageWithinA} />
    </Stack.Navigator>
  );
};

export default App;
