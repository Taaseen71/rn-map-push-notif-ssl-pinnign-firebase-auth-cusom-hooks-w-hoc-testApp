import React from 'react';
import Navigation from 'src/navigation';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
// import store from 'src/store';
import {store} from 'src/store';

function App(): JSX.Element {
 
  return (
    <Provider store={store}>
      <ErrorBoundary fallback={'There was an error'}>
        <NavigationContainer>
              <Navigation />
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
}


export default App;
