import { RootNavigator } from './navigation';
import { ApolloProvider } from '@apollo/client/react';
import client from './gql/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <RootNavigator />
    </ApolloProvider>
  );
}

export default App;
