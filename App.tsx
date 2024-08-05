import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Footer from './pages/Footer';
import Topbar from './pages/Topbar';
import Main from './pages/Main';
import ToDoProvider from './pages/ToDoContext'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: '#ff0',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ToDoProvider>
        <Topbar />
        <Main />
        <Footer />
      </ToDoProvider>
    </SafeAreaView>
  );
}

export default App;
