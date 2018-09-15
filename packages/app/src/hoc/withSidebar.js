import * as React from 'react';

import SidebarContext from '../context/SidebarContext';

export default function withSidebar(WrappedComponent) {
  return (props) => (
    <SidebarContext.Consumer>
      {({ toggleSidebar }) => {
        return <WrappedComponent {...props} toggleSidebar={toggleSidebar} />
      }}
    </SidebarContext.Consumer>
  );
}
