import * as React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { QueryRenderer } from 'react-relay';
import environment from './environment';

export function createQueryRenderer(
  FragmentComponent,
  config
) {
  const { query, queriesParams } = config;

  class QueryRendererWrapper extends React.Component {

    render() {
      const variables = queriesParams ? queriesParams(this.props) : config.variables;

      return (
        <QueryRenderer
          environment={environment}
          query={query}
          variables={variables}
          render={({ error, props }) => {
            if (error) {
              console.error(error);
              return <Text>{error.message}</Text>;
            }

            if (props) {
              return <FragmentComponent {...this.props} query={props} />;
            }

            return (
              <ActivityIndicator size="large"/>
            );
          }}
        />
      );
    }
  }

  return QueryRendererWrapper;
}
