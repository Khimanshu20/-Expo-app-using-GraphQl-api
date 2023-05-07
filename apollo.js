import { ApolloClient, InMemoryCache } from '@apollo/client';

const GITHUB_API_URL = 'https://api.github.com/graphql';
const TOKEN = '<"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">';

const client = new ApolloClient({
  uri: GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${"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"}`
  },
  cache: new InMemoryCache(),
});

export default client;
