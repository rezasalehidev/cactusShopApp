import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from './../src/consts';

const HeaderHome = () => {
  return (
    <View>
      <Entypo name="list" size={20} style={styles.HeaderIconMenu} />
      <View style={styles.ContainerHeader}>
        <Entypo name="shopping-cart" size={20} style={{color: 'black'}} />
        <View>
          <Text style={styles.TextWelcome}>خوش آمدید به</Text>
          <Text style={styles.TextShop}>فروشگاه کاکتوس</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderIconMenu: {textAlign: 'right', color: '#000'},
  ContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignContent: 'center',
  },
  TextWelcome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  TextShop: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.green,
  },
});

export default HeaderHome;
