import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { dummyBills } from '../../../../shared/DummyBill';

const BillDetails = ({ route }) => {
  const [bill, setBill] = useState({});
  const { billId } = route.params;

  useEffect(() => {
    const temp = dummyBills.find((x) => x.id === billId);

    setBill(temp);

    console.log(temp);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <View>
        <View style={{ margin: 20 }}>
          <Text style={{ color: '#8b8b8b', fontSize: 10 }}>EMITENTE</Text>
          <Text>
            {bill?.A} - {bill?.company?.toUpperCase()}
          </Text>
        </View>
        <Divider />
        <View style={{ margin: 20 }}>
          <Text style={{ color: '#8b8b8b', fontSize: 10 }}>DATA EMISSÃO</Text>
          <Text>{bill?.F}</Text>
        </View>
        <Divider />
        <View style={{ margin: 20 }}>
          <Text style={{ color: '#8b8b8b', fontSize: 10 }}>VALOR TOTAL</Text>
          <Text>{bill?.O}€</Text>
        </View>
        <Divider />
        <View style={{ margin: 20 }}>
          <Text style={{ color: '#8b8b8b', fontSize: 10 }}>ESTADO</Text>
          <Text>{bill?.state}</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          mode='contained'
          style={{ marginHorizontal: 10 }}
          buttonColor='#ED5E68'
          onPress={() => console.log('apagado')}>
          Eliminar
        </Button>
        <Button
          mode='contained'
          style={{ marginHorizontal: 10 }}
          buttonColor='teal'
          onPress={() => console.log('pago')}>
          Pagar
        </Button>
      </View>
    </View>
  );
};

export default BillDetails;
