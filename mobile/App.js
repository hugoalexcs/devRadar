import React from 'react';
import { StatusBar } from 'react-native';

//routes
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40e7" />
      <Routes />
    </>
  );
}