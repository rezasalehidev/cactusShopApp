import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../src/consts';

const ListCategory = ({categories, onPress, indexcategory}) => {
  return (
    <View style={Styles.ContainerLists}>
      {categories.map((item, index) => (
        <View
          key={index}
          style={[
            Styles.EachItem,
            index == indexcategory ? Styles.Selectindex : {},
          ]}>
          <TouchableOpacity onPress={() => onPress(index)}>
            <Text
              style={[
                Styles.TextItem,
                index == indexcategory ? {color: COLORS.green} : {},
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const Styles = StyleSheet.create({
  ContainerLists: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  EachItem: {
    marginRight: 30,
    marginTop: 20,
  },
  TextItem: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  Selectindex: {
    borderBottomWidth: 1,
    borderColor: COLORS.green,
    padding: 8,
    color: COLORS.green,
  },
});

export default ListCategory;
