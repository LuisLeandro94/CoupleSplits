import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { dummyBills } from '../../../shared/DummyBill';
import BillCard from './components/BillCard';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const BillsManager = ({ navigation }) => {
  const [lastBill, setLastBill] = useState(dummyBills[0]);
  const [bills, setBills] = useState(dummyBills);
  const [pendingBills, setPendingBills] = useState([]);
  const [completedBills, setCompletedBills] = useState([]);

  function HomeScreen() {
    return (
      <ScrollView>
        {bills?.map((bill, index) => (
          <BillCard
            onPress={() =>
              navigation.navigate('Detalhe', {
                billId: bill.id,
              })
            }
            key={index}
            bill={bill}
          />
        ))}
      </ScrollView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
      }}>
      <View
        style={{
          height: 200,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text variant='headlineLarge' style={{ marginBottom: 20 }}>
          As suas faturas
        </Text>
        <Button
          icon='camera'
          mode='contained'
          buttonColor='teal'
          onPress={() =>
            navigation.navigate('Scanner', {
              lastBill: lastBill,
              setLastBill: setLastBill,
              setBills: setBills,
              bills: bills,
            })
          }>
          Adicionar fatura
        </Button>
      </View>
      <View style={{ flex: 1, backgroundColor: 'yellow', width: '100%' }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Pending') {
                iconName = focused ? 'time-outline' : 'time-outline';
              } else if (route.name === 'Completed') {
                iconName = focused
                  ? 'checkmark-circle-outline'
                  : 'checkmark-circle-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'teal',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            options={{ tabBarBadge: dummyBills.length }}
            name='Pending'
            component={HomeScreen}
          />
          <Tab.Screen name='Completed' component={SettingsScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default BillsManager;
