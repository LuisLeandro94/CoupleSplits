import React from 'react';
import { Button, Card, Text } from 'react-native-paper';

const BillCard = ({ bill }) => {
  const getDate = () => {
    const year = bill.F.substring(0, 4);
    const month = bill.F.substring(4, 6);
    const day = bill.F.substring(6, 8);

    const date = new Date(year, month - 1, day);

    return date;
  };
  return (
    <Card>
      {console.log(bill)}
      <Card.Title title='Card Title' subtitle='Card Subtitle' />
      <Card.Content>
        <Text variant='titleLarge'>{bill.O}</Text>
        <Text variant='bodyMedium'>{getDate}</Text>
      </Card.Content>
    </Card>
  );
};

export default BillCard;
