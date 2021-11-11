import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderDetails from './../../../components/Details/HeaderDetails';
import COLORS from './../../consts/colors';

const DetailsScreen = ({route, navigation}) => {
  const [counter, setCounter] = useState(0);
  const item = route.params;
  return (
    <View style={styles.container}>
      {/* Header Details */}
      <HeaderDetails navigation={navigation} />
      {/* DEtails */}
      <View style={styles.imgContainer}>
        <Image
          source={item.img}
          style={{resizeMode: 'contain', width: '100%', height: '100%'}}
        />
      </View>
      {/* Header Details */}
      <View style={styles.ContainerDescription}>
        <View style={styles.HeaderDes}>
          <View style={styles.containerPrice}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>
              {item.price} هزار تومن{' '}
            </Text>
          </View>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 25}}>
            {item.name}
          </Text>
        </View>
        {/* About Details */}
        <View style={{marginTop: 30, marginRight: 10}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>توضیحات</Text>
          <Text style={{textAlign: 'right', marginTop: 20}}>{item.about}</Text>
        </View>
        {/* Button Buy And counter  */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 25,
            padding: 15,
          }}>
          <TouchableOpacity
            style={{
              padding: 13,
              backgroundColor: COLORS.green,
              borderRadius: 7,
            }}>
            <Text style={{color: '#fff'}}>salam</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{backgroundColor: '#ddd', padding: 10, borderRadius: 10}}
              onPress={() => setCounter(counter + 1)}>
              <Text>+</Text>
            </TouchableOpacity>
            <View style={{marginHorizontal: 10}}>
              <Text>{counter < 0 ? 0 : counter}</Text>
            </View>
            <TouchableOpacity
              style={{backgroundColor: '#ddd', padding: 10, borderRadius: 10}}
              onPress={() => setCounter(counter - 1)}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  ContainerDescription: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  HeaderDes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  containerPrice: {
    padding: 5,
    backgroundColor: COLORS.green,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default DetailsScreen;
