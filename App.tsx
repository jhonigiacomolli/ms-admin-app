import React from 'react';
import { AuthContextProvider } from 'hooks/auth';
import { GlobalContextProvider } from 'hooks/global';
import { Root } from 'screens/root';

export default function App() {
  return (
    <GlobalContextProvider>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </GlobalContextProvider>
  );
}