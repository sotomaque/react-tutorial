import { HttpLink } from '@apollo/react-hooks';
import { WebSocketLink } from 'apollo-link-ws';
import { HASURA_SECRET, HTTP_URL, WSS_URL } from '../consts';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';
import { ApolloClient, InMemoryCache } from '@apollo/client';

// // HTTP Link
const httpsLink = new HttpLink({
  uri: HTTP_URL,
  headers: {
    'x-hasura-admin-secret': HASURA_SECRET,
  },
});

// // WSS Link
const wssLink = new WebSocketLink({
  uri: WSS_URL,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': HASURA_SECRET,
      },
    },
  },
});

// // Split
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wssLink,
  httpsLink
);

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
};

// Create Apollo Client
const client = createApolloClient();

export default client;
