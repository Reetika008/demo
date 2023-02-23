import { StyleSheet, View, Text } from "react-native";
import { useNavigationContainerRef } from "@react-navigation/native";
import { StackCenter } from "./src/navigation/StackCenter";

export default function App() {
  const navigationRef = useNavigationContainerRef();
  return (
    <View style={styles.container}>
      <StackCenter navigationRef={navigationRef} />
      {/* <Text>HEllo</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
