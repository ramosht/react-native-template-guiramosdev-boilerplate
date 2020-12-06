import React from 'react';

import { StyleSheet, Text } from 'react-native';
import theme from '@styles/Theme';
import * as S from './style';

const Home: React.FC = () => (
  <S.Wrapper>
    <Text style={styles.title}>Hello myApp</Text>
  </S.Wrapper>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#ffffff',
    textShadowColor: theme.colors.secondary,
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 1,
  },
});

export default Home;
