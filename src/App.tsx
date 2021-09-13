import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NativeBaseProvider, View, Text, ScrollView} from 'native-base';
import DrawerNavigation from './navigations/DrawerNavigation';
import TabNavigation from './navigations/TabNavigation';
import RootNavigation from './navigations/RootNavigation/RootNavigation';
import {SafeAreaView, StatusBar} from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#000" />
        <RootNavigation />
      </View>
    </NativeBaseProvider>
  );
}
