import React from 'react';
import { View, CheckBox, Image } from 'react-native';
import Drawer from 'react-native-drawer';
import styled from 'styled-components';
import { Formik } from 'formik';

import SidebarContext from '../context/SidebarContext';

const SidebarLabel = styled.Text`
  font-size: 20px;
  color: #4a56b8;
  text-align: center;
`;

const SidebarImage = styled.Image`
  height: 100px;
`;

const Border = styled.View`
  height: 25px;
  background-color: #4a56b8;
`;

const Wrapper = styled.View`
`;

const Separator = styled.View`
  height: 1px;
  background-color: #4a56b8;
  opacity: 0.7;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

const Checkbox = styled(CheckBox)`
  margin: 5px;
`;

const CheckboxLabel = styled.Text`
  font-size: 14px;
  text-align: center;
`;

const List = () => (
  <Wrapper>
    <Border/>
    <SidebarImage
      source={{
        uri: 'https://previews.123rf.com/images/creativika/creativika1610/creativika161000098/66913476-folding-paper-city-map-with-location-mark-and-flag-labels-colored-flat-icon-vector-eps8-illustration.jpg'
      }}
    />
    <SidebarLabel>
      Mostrar no Mapa
    </SidebarLabel>
    <Separator/>
    <Formik
      initialValues={{ firstName: '' }}
      onSubmit={values => console.log(values)}>
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <Row>
            <Checkbox
              onChange={() => {}}
              value={true}
            />
            <CheckboxLabel>
              Edifícios
            </CheckboxLabel>
          </Row>
          <Row>
            <Checkbox
              onChange={() => {}}
              value={false}
            />
            <CheckboxLabel>
              Eventos
            </CheckboxLabel>
          </Row>
          <Row>
            <Checkbox
              onChange={() => {}}
              value={true}
            />
            <CheckboxLabel>
              Caminhos
            </CheckboxLabel>
          </Row>


        </View>
      )}
    </Formik>
  </Wrapper>
);


const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
};

export default class Sidebar extends React.Component {

  state = {
    isSidebarOpen: false,
  };

  toggleSidebar = () => this.setState(({ isSidebarOpen }) => ({ isSidebarOpen: !isSidebarOpen }));

  render () {
    const { children } = this.props;
    const { isSidebarOpen } = this.state;
    return (
      <SidebarContext.Provider
        value={{
          toggleSidebar: this.toggleSidebar,
        }}
      >
        <Drawer
          open={isSidebarOpen}
          tapToClose={true}
          openDrawerOffset={0.3} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          onClose={() => this.setState({ isSidebarOpen: false })}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          content={<List/>}
        >
          { children }
        </Drawer>
      </SidebarContext.Provider>
    )
  }
}
