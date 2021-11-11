import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLORS} from './../src/consts';
import {TextInput} from 'react-native-gesture-handler';

const Searchbar = () => {
  return (
    <View style={styles.containerSearch}>
      <EvilIcons name="search" size={20} style={styles.IconSearch} />
      <TextInput placeholder="جستجو" style={styles.TextSearchInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  BoxIocn: {
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  containerInputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconSearch: {
    backgroundColor: COLORS.green,
    padding: 18,
    borderTopLeftRadius: 15,
  },
  TextSearchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 6,
    paddingRight: 10,
    borderTopRightRadius: 15,
  },
});

export default Searchbar;
