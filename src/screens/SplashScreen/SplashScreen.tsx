import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { RootStoreType } from "@store";
import { ThemeType } from "@utils";
import React, { useEffect, useMemo, useRef } from "react";
import { Animated, Image, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { strings } from "@utils";
import { styles } from "./styles";
import { Text } from "@atoms";

interface SplashScreenProps {
  navigation: NavigationProp<MainStackParamList, "Splash">;
}

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const theme = useTheme() as ThemeType;
  const settings = useSelector((state: RootStoreType) => state.settings);
  const opacity = useRef(new Animated.Value(0));
  strings.setLanguage(settings.language || "ES");

  useEffect(() => {
    const navigateAwait = async () => {
      await waitUntil(500);

      if (settings.appConfigured) {
        navigation.reset({ index: 0, routes: [{ name: "Quote" }] });
      } else {
        navigation.reset({ index: 0, routes: [{ name: "Language" }] });
      }
    };

    navigateAwait();
  }, [settings]);

  const waitUntil = async (time: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = useMemo(() => {
    return {
      alignItems: "center",
      opacity: opacity.current,
    };
  }, []);

  useEffect(() => {
    Animated.timing(opacity.current, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container(theme)}>
      <Animated.View style={animatedStyle}>
        <Image source={require("@assets/img/logo.png")} style={styles.logo} />
        <Text style={styles.title} color={"primaryContrast"}>
          QuoteApp
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;
