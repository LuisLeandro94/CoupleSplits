import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import BillCard from './components/BillCard';

const BillsManager = ({ navigation }) => {
  const [lastBill, setLastBill] = useState({});
  const [bills, setBills] = useState([]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {console.log(lastBill)}
      <Text>Gerir faturas</Text>
      <Button
        title='Scan'
        onPress={() =>
          navigation.navigate('Scanner', {
            lastBill: lastBill,
            setLastBill: setLastBill,
            setBills: setBills,
            bills: bills,
          })
        }
      />
      {bills?.map((bill) => (
        <BillCard bill={bill} />
      ))}
    </View>
  );
};

export default BillsManager;
