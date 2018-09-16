import React from 'react';
import Collapsible from 'react-native-collapsible';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';
import { Left, Right } from "native-base";
import withFilter from '../../hoc/withFilter';


const StyledText = styled.Text`
  color: #41456b;
`;

const Item = styled.View`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  border-top-width: 1px;
  border-top-color: #4a56b8;
  border-bottom-width: 1px;
  border-bottom-color: #4a56b8;
  padding: 0 20px;
  align-items: center;
`;

const Content = styled.View`
  padding: 10px;
`;

const PathTitle = styled(StyledText)`
  width: 100%;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.TouchableOpacity`
  z-index: 10;
`;

const Button = styled.Button`
  z-index: 999;
`;

class Collapse extends React.Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    return this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  };

  render() {
    const { item, navigation, setPath, setBuild } = this.props;
    const { name = 'name', id, description, hour, event } = item;

    return (
      <View>
        <TouchableOpacity onPress={this.toggleCollapse}>
          <View>
            <Item>
              { hour ? (
                <React.Fragment>
                  <Left>
                    <StyledText>{name.toUpperCase()}</StyledText>
                  </Left>
                  <Right>
                    <StyledText>{hour}</StyledText>
                  </Right>
                </React.Fragment>
              ) : (
                <PathTitle>{name.toUpperCase()}</PathTitle>
              )}
            </Item>
          </View>
        </TouchableOpacity>
        <ButtonWrapper onPress={async () => {
          setBuild(false);
          setPath(true);
          await Promise.resolve();
          return navigation.navigate("Mapa", { id })
        }}>

          <Collapsible collapsed={!this.state.isOpen}>
            <Content>
              <Description>
                { description }
              </Description >
              {
                !event && (
                  <Button
                    onPress={async () => {
                      setBuild(false);
                      setPath(true);
                      await Promise.resolve();
                      return navigation.navigate("Mapa", { id })
                    }}
                    title="Iniciar Rota"
                    color="#4a56b8"
                  />
                )
              }
            </Content>
          </Collapsible>
        </ButtonWrapper>

      </View>
    )
  }
}

export default withNavigation(withFilter(Collapse));
