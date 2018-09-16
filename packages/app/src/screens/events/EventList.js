import React from 'react';
import { FlatList } from 'react-native';

import Collapse from '../../components/common/Collapse';

const items = [
  {
    id: '1',
    name: 'nome',
    hour: '13:40',
    description: 'descrição do evento',
  },
  {
    id: '2',
    name: 'nome2',
    hour: '15:40',
    description: 'descrição do evento 2',
  }
];

class EventList extends React.Component {

  renderItem = (item) => (
    <Collapse item={item}/>
  );

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
