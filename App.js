import { StyleSheet } from "react-native";
import Navigation from "./navigation";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create();
