import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import UISafeAreaView from "./src/components/UI/UISafeAreaView";
import UISearchInput from "./src/components/UI/UISearchInput";
import UIFilterChip from "./src/components/UI/UIFilterChip";

const App = () => {
  return (
    <UISafeAreaView style={styles.container}>
      <UISearchInput />

      <StatusBar style="auto" />
    </UISafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
