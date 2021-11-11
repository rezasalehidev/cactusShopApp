import React from 'react';
import {View, Text} from 'react-native';

const DetailsScreen = ({route}) => {
  console.log(route.params);
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;
