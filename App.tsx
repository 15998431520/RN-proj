import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Footer from './pages/Footer';
import Topbar from './pages/Topbar';
import Main from './pages/Main';
import Tabbar from './pages/Tabbar';
import ToDoProvider from './pages/ToDoContext'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
        <Tabbar />
        <Main />
        <Footer />
      </ToDoProvider>
    </SafeAreaView>
  );
}

export default App;
