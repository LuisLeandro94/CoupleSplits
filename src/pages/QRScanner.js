import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NIF_API_KEY as key, NIF_API_URL as url } from 'react-native-dotenv';

const QRScanner = ({ route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { lastBill, setLastBill, bills, setBills } = route.params;

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const getCompanyInformation = async (nif) => {
    const result = await fetch(`${url}${nif}&key=${key}`);

    const json = await result.json();
    console.log(json);
  };

  const handleBarCodeScanned = async ({ type, data }) => {
    let tempBills = bills;

    let pairs = data.split('*');

    let obj = pairs.reduce((obj, data) => {
      let [k, v] = data.split(':');
      obj[k] = v;
      return obj;
    }, {});

    tempBills.unshift(obj);

    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setLastBill(obj);
    setBills(tempBills);
    console.log(obj.A);
    await getCompanyInformation(obj.A);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </>
  );
};

export default QRScanner;
