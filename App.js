import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { PersistGate} from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return <Provider store={store}>
    <PersistGate loading={null}
      persistor={persistor}
    >
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>

    </PersistGate>
  </Provider>
}