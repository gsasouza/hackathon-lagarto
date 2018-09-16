import React from 'react';
import Collapsible from 'react-native-collapsible';
import { Text, View, TouchableOpacity } from 'react-native';
import {Left, ListItem, Right} from "native-base";
import styled from 'styled-components';


const Hour = styled.Text`
  color: #41456b;
`;

const Item = styled.View`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
  border-top-width: 1px;
  border-top-color: #4a56b8;
  border-bottom-width: 1px;
  border-bottom-color: #4a56b8;
  padding: 0 20px;
  align-items: center;
`;

export default class Collapse extends React.Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    console.log('here');
    return this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  };

  render() {
    const { item } = this.props;
    const { name = 'Nome', hour = '14:30' } = item;
    return (
      <View>
        <TouchableOpacity onPress={this.toggleCollapse}>
          <View>
            <Item>
              <Left>
                <Hour>{name.toUpperCase()}</Hour>
              </Left>
              <Right>
                <Hour>{hour}</Hour>
              </Right>
            </Item>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={!this.state.isOpen}>
          <View>
            <Text>
              Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
              ribs
            </Text>
          </View>
        </Collapsible>
      </View>
    )
  }
}
