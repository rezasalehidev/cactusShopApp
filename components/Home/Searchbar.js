import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLORS} from '../../src/consts';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const Searchbar = () => {
  return (
    <View style={styles.containerSearch}>
      <TouchableOpacity>
        <EvilIcons name="search" size={20} style={styles.IconSearch} />
      </TouchableOpacity>
      <TextInput
        placeholder="جستجو"
        style={styles.TextSearchInput}
        placeholderTextColor="#000"
      />
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
  IconSearch: {
    backgroundColor: COLORS.green,
    padding: 18,
    borderTopLeftRadius: 15,
    color: COLORS.white,
  },
  TextSearchInput: {
    borderWidth: 1,
    borderColor: '#000',
    flex: 6,
    paddingRight: 10,
    borderTopRightRadius: 15,
  },
});

export default Searchbar;
