import React from 'react';
import theme from '@theme/index';
import { Groups } from '@screens/groups';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}