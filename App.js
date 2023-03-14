import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Authentication from './src/pages/Authentication/Authentication';
import BillsManager from './src/pages/BillsManager/BillsManager';
import BillDetails from './src/pages/BillsManager/components/BillDetails';
import QRScanner from './src/pages/QRScanner';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					options={{ headerShown: false }}
					name='Auth'
					component={Authentication}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name='Home'
					component={BillsManager}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name='Scanner'
					component={QRScanner}
				/>
				<Stack.Screen name='Detalhe' component={BillDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
