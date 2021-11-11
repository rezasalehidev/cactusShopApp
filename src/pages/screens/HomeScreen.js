import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import HeaderHome from '../../../components/Home/HeaderHome';
import ListCategory from '../../../components/Home/ListCategory';
import Searchbar from './../../../components/Home/Searchbar';
import Card from './../../../components/Home/Card';
import plants from './../../consts/plants';

const categories = ['کاکتوس', 'گل رز', 'گل محمدی', 'گل مریم'];
const HomeScreen = ({navigation}) => {
  const [indexcategory, setIndexcategory] = useState(0);

  return (
    <View style={styles.Container}>
      {/* Header Home */}
      <HeaderHome />
      {/* SearchBar */}
      <Searchbar />
      {/* All Category Plant */}
      <ListCategory
        categories={categories}
        onPress={index => setIndexcategory(index)}
        indexcategory={indexcategory}
      />
      <FlatList
        contentContainerStyle={{marginTop: 20, paddingBottom: 10}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        data={plants}
        renderItem={({item}) => <Card item={item} navigation={navigation} />}
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
