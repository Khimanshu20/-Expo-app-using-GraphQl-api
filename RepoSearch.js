import React from 'react';
import {Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import client from './apollo';

const REPOSITORIES_QUERY = gql`
  query {
    viewer {
      repositories(first: 10) {
        nodes {
          id
          name
        }
      }
    }
  }
`;

const Repositories = () => {
  const { loading, error, data } = useQuery(REPOSITORIES_QUERY, { client });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <View>
      {data.viewer.repositories.nodes.map((repo) => (
        <Text key={repo.id}>{repo.name}</Text>
      ))}
    </View>
  );
};



export default Repositories;
