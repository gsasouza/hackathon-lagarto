import React from 'react';
import { FlatList } from 'react-native';
import { ListItem, Text, Left, Right } from 'native-base';


const items = [
  {
    id: '1',
    name: 'nome',
    hour: '13:40'
  }
];
class EventList extends React.Component {

  renderItem = ({ item }) => {
    const { name, hour } = item;
    return (
      <ListItem>
        <Left>
          <Text>{name}</Text>
        </Left>
        <Right>
          <Text>{hour}</Text>
        </Right>
      </ListItem>
    )
  };
  render() {
    return (
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
        onEndReached={() => {}}
        onRefresh={() => {}}
        refreshing={false}
      />
    )
  }
}

export default EventList;
