import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import BillsManager from './src/pages/BillsManager/BillsManager';
import QRScanner from './src/pages/QRScanner';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={BillsManager} />
        <Stack.Screen name='Scanner' component={QRScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
