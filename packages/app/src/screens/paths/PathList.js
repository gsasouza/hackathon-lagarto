import React from 'react';
import { FlatList } from 'react-native';

import Collapse from '../../components/common/Collapse';
import {createFragmentContainer, graphql} from 'react-relay';
import withGeolocation from '../../hoc/withGeolocation';
import withFilter from '../../hoc/withFilter';
import {createQueryRenderer} from '../../relay/createQueryRenderer';

const items = [
  {
    id: '1',
    name: 'nome',
    description: 'descrição do evento',
  },
  {
    id: '2',
    name: 'nome2',
    description: 'descrição do evento 2',
  }
];

class EventList extends React.Component {

  renderItem = ({ item }) => (
    <Collapse item={item}/>
  );

  render() {

    const { paths } = this.props.query;
    return (
      <FlatList
        data={paths}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
        onEndReached={() => {}}
        onRefresh={() => {}}
        refreshing={false}
      />
    )
  }
}



const fragment = createFragmentContainer(EventList,
  {
    query: graphql`
      fragment PathList_query on Query {    
        paths { 
          id
          name
        }
      }
    `,
  }
);



export default createQueryRenderer(fragment,
  {
    query: graphql`
      query PathListQuery {
        ...PathList_query
      }
    `,
  },
);
