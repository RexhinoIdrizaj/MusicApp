import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import UISafeAreaView from './src/components/UI/UISafeAreaView';
import ScreenMusicList from './src/screens/ScreenMusicList';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <UISafeAreaView style={styles.container}>
        <ScreenMusicList />
      </UISafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
