import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../src/consts';
const width = Dimensions.get('screen').width / 2 - 30;

const Card = ({item, navigation}) => {
  const [Like, setLike] = useState(item.like);
  console.log(item);
  return (
    <View style={[styles.Card]} key={item.id}>
      <View style={styles.HeartIcon}>
        <TouchableOpacity onPress={() => setLike(!Like)}>
          <View style={styles.backgroundIcon}>
            {Like ? (
              <Entypo name="heart" size={18} style={{color: 'red'}} />
            ) : (
              <Entypo name="heart" size={18} style={{color: 'gray'}} />
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={{height: 100}}>
        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
          <Image
            source={item.img}
            style={styles.imgCard}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
        <View style={styles.titelName}>
          <Text style={styles.TextName}>{item.name}</Text>
          <View style={styles.ContainerPrice}>
            <Entypo
              name="squared-plus"
              size={16}
              style={{color: COLORS.green}}
            />
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              {item.price} هزار تومن
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerCard: {
    marginTop: 20,
  },
  Card: {
    height: 220,
    backgroundColor: '#fff',
    marginBottom: 10,
    width,
    borderRadius: 10,
    justifyContent: 'center',
  },
  imgCard: {
    width: '100%',
    height: '100%',
  },
  HeartIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  backgroundIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  titelName: {
    marginRight: 7,
    marginTop: 5,
  },
  TextName: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  ContainerPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default Card;
