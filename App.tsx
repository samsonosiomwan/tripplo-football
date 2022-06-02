/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from 'react-query';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigation from './src/navigation';


const App = () => {
  const queryClient = new QueryClient();

  return (
   
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
              <AppNavigation />
          </RecoilRoot>
        </QueryClientProvider>
      </SafeAreaProvider>

  );
};

export default App;
