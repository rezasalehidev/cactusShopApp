import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderHome from '../../../components/HeaderHome';
import ListCategory from '../../../components/ListCategory';
import Searchbar from './../../../components/Searchbar';

const categories = ['کاکتوس', 'گل رز', 'گل محمدی', 'گل مریم'];
const HomeScreen = () => {
  const [indexcategory, setIndexcategory] = useState(0);

  return (
    <View style={styles.Container}>
      <HeaderHome />
      <Searchbar />
      <ListCategory
        categories={categories}
        onPress={index => setIndexcategory(index)}
        indexcategory={indexcategory}
      />
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
