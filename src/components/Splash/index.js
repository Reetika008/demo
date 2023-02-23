import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../library/firebase";
import { useNavigation } from "@react-navigation/native";
import * as Screens from "../../constants/Screens";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate(Screens.HOME_SCREEN);
        return;
      }
      navigation.navigate(Screens.LOGIN_SCREEN);
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
