import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen(navigation) {
  return (
    <View>
      <view style={{ flex 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacityonPress={()=>navigation.navigate('Detail')}>
          <Taxt>Home Screen</Taxt>
        </TouchableOpacityonPress=>
      </view>
    </View>
  );
}