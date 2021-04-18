import React from 'react';
import { CountProvider, useCount } from '../../context';
import { styles } from './styles';
import { useQuery, gql } from '@apollo/client';

const USER_COUNT = gql`
  query MyQuery {
    users_aggregate {
      aggregate {
        count
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(USER_COUNT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) console.table(data);
  return (
    <CountProvider>
      <ShowCurrentCount />
      <InputForm />
    </CountProvider>
  );
};

const ShowCurrentCount = () => {
  const { state } = useCount();

  return <h2>{state.count}</h2>;
};

const InputForm = () => (
  <div style={styles.button}>
    <ActualForm />
  </div>
);

const ActualForm = () => {
  const { dispatch } = useCount();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: 'increment',
        });
      }}
    >
      <button type="submit">Click Me</button>
    </form>
  );
};

export default Home;
