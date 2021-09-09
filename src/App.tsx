import React, {Component} from 'react';
import 'react-native-gesture-handler';
import Nav from './components/Nav';
import {NativeBaseProvider, ScrollView} from 'native-base';
import DrawerNavigation from './navigations/DrawerNavigation';
import TabNavigation from './navigations/TabNavigation';
import RootNavigation from './navigations/RootNavigation/RootNavigation';
import {SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        <RootNavigation />
        {/* <DrawerNavigation />
      <TabNavigation /> */}
        <Nav />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
