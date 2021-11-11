import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

const HeaderDetails = ({navigation}) => {
  return (
    <View style={styles.containerDetails}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.BackgroundBackIcon}>
          <Entypo name="arrow-left" size={25} style={{color: '#000'}} />
        </View>
      </TouchableOpacity>
      <Entypo name="shopping-basket" size={25} style={{color: '#000'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BackgroundBackIcon: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
  },
});

export default HeaderDetails;
