import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@pages/Home';
import PageA from '@pages/PageA';
import PageB from '@pages/PageB';

const Tab = createBottomTabNavigator();

const BottomBar: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="PageA" component={PageA} />
      <Tab.Screen name="PageB" component={PageB} />
    </Tab.Navigator>
  );
};

export default BottomBar;
