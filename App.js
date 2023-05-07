import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native';
import Repositories from './RepoSearch';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#333" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Top 10 Repositories are given below:</Text>
        <Repositories />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42b5d4',
    paddingHorizontal: 20,
    paddingTop: 50,
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  repoName: {
    fontSize: 18,
    color: '#333',
    marginBottom: 30,
  },
  repoId: {
    fontSize: 18,
    color: '#555',
  },
});

export default App;
