import React from 'react';
import { Card } from 'react-native-paper';

const BillCard = ({ bill }) => {
  return (
    <Card>
      <Card.Title
        title='Card Title'
        subtitle='Card Subtitle'
        left={LeftContent}
      />
      <Card.Content>
        <Text variant='titleLarge'>Card title</Text>
        <Text variant='bodyMedium'>Card content</Text>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default BillCard;
