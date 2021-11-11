import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderHome from '../../../components/HeaderHome';
import ListCategory from '../../../components/ListCategory';
import Searchbar from './../../../components/Searchbar';

const HomeScreen = () => {
  return (
    <View style={styles.Container}>
      <HeaderHome />
      <Searchbar />
      <ListCategory />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export default HomeScreen;
