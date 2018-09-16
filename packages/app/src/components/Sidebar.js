import React from 'react';
import { withNavigation } from 'react-navigation';
import Checkbox from 'react-native-custom-checkbox';
import Drawer from 'react-native-drawer';
import styled from 'styled-components';
import { Formik } from 'formik';

import SidebarContext from '../context/SidebarContext';
import FilterContext from '../context/FilterContext';

const SidebarLabel = styled.Text`
  font-size: 24px;
  color: #4a56b8;
  text-align: center;
  padding: 10px 0;
`;

const SidebarImage = styled.Image`
   height: 160px;
   width: 100%; 
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
  align-items: center;
`;

const CheckboxLabel = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const CheckboxWrapper = styled.View`
  margin: 0 5px;
`;

class List extends React.Component {

  render() {
    return (
      <Wrapper>
        <Border/>
        <SidebarImage
          source={require('../static/sidebar-image.png')}
        />
        <SidebarLabel>
          Mostrar no Mapa
        </SidebarLabel>
        <Separator/>
        <Formik
          initialValues={{ build: true, path: false, event: false }}
          onSubmit={values => console.log(values)}>
          {({ setFieldValue, handleSubmit, values }) => (
            <FilterContext.Provider
              value={{
                setPath: (value) => {
                  console.log('here', value)
                  return setFieldValue('path', value)

                },setBuild: (value) => setFieldValue('build', value),
                setEvent: (value) => setFieldValue('event', value),
                path: values.path,
                build: values.build,
                event: values.event
              }}
            >
              {console.log(values)}
              <CheckboxWrapper>
                <Row>
                  <Checkbox
                    style={{
                      margin: 10,
                      borderRadius: 50,
                      color: '#41456b',
                    }}
                    size={30}
                    name={'build'}
                    onChange={(name, checked) => setFieldValue(name, checked)}
                    checked={values.build}
                  />
                  <CheckboxLabel>
                    EDIFÍCIOS
                  </CheckboxLabel>
                </Row>
                <Row>
                  <Checkbox
                    name={'event'}
                    size={30}
                    onChange={(name, checked) => setFieldValue(name, checked)}
                    checked={values.event}
                    style={{
                      margin: 10,
                      borderRadius: 50,
                      color: '#41456b',
                    }}
                  />
                  <CheckboxLabel>
                    EVENTOS
                  </CheckboxLabel>
                </Row>
                <Row>
                  <Checkbox
                    name={'path'}
                    size={30}
                    style={{
                      margin: 10,
                      borderRadius: 50,
                      color: '#41456b',
                    }}
                    onChange={(name, checked) => setFieldValue(name, checked)}
                    checked={values.path}
                  />
                  <CheckboxLabel>
                    CAMINHOS
                  </CheckboxLabel>
                </Row>
              </CheckboxWrapper>
            </FilterContext.Provider>
          )}
        </Formik>
      </Wrapper>
    );
  }
}


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
          content={<List {...this.props}/>}
        >
          { children }
        </Drawer>
      </SidebarContext.Provider>
    )
  }
}
