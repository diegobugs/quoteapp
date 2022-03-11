import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { RootStoreType } from "@store";
import { ThemeType } from "@utils";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { strings } from "@utils";
import { styles } from "./styles";

interface SplashScreenProps {
  navigation: NavigationProp<MainStackParamList, "Splash">;
}

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const theme = useTheme() as ThemeType;
  const settings = useSelector((state: RootStoreType) => state.settings);
  strings.setLanguage(settings.language || "ES");

  useEffect(() => {
    if (settings.appConfigured) {
      navigation.reset({ index: 0, routes: [{ name: "Quote" }] });
    } else {
      navigation.reset({ index: 0, routes: [{ name: "Language" }] });
    }
  }, [settings]);

  return (
    <SafeAreaView style={styles.container(theme)}>
      <View>
        <Text>QuoteApp</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
