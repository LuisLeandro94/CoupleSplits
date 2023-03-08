import React, { useEffect, useState } from 'react';
import { Button, Card, Text } from 'react-native-paper';

const BillCard = ({ bill, onPress }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const getDate = () => {
      const year = bill.F.substring(0, 4);
      const month = bill.F.substring(4, 6);
      const day = bill.F.substring(6, 8);

      const formattedDate = new Date(year, month - 1, day);

      setDate(formattedDate.toDateString());
    };

    getDate();
  }, []);

  return (
    <Card
      onPress={onPress}
      style={{ marginHorizontal: 20, marginVertical: 10 }}>
      <Card.Title title={bill.company} subtitle={date} />
      <Card.Content
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text variant='titleLarge'>{bill.O}€</Text>
        <Text variant='bodyMedium'>{bill.state}</Text>
      </Card.Content>
    </Card>
  );
};

export default BillCard;
