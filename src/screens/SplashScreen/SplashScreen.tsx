import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { quotesActions, RootStoreType } from "@store";
import { QuoteResponse, ThemeType } from "@utils";
import React, { useEffect, useMemo, useRef } from "react";
import { Animated, Image, Platform, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { strings } from "@utils";
import { styles } from "./styles";
import { Text } from "@atoms";
import PushNotification from "react-native-push-notification";

interface SplashScreenProps {
  navigation: NavigationProp<MainStackParamList, "Splash">;
}

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const theme = useTheme() as ThemeType;
  const settings = useSelector((state: RootStoreType) => state.settings);
  const opacity = useRef(new Animated.Value(0));
  const dispatch = useDispatch();
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
      duration: 250,
    }).start();

    createNotificationChannel();
  }, []);

  const createNotificationChannel = () => {
    try {
      PushNotification.createChannel(
        {
          channelId: "quoteapp-notifications",
          channelName: "Quoteapp",
        },
        () => {}
      );

      PushNotification.getDeliveredNotifications((notifications) => {
        if (notifications.length > 0) {
          fetchQuotes();
          PushNotification.removeDeliveredNotifications(
            notifications.map((notification) => notification.identifier)
          );
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://quoteapp-server.herokuapp.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query {
              quote(lang: ${settings.language?.toLowerCase() || "es"}) {
                id
                quote
                author
              }
            }
          `,
        }),
      });

      if (response.ok) {
        const {
          data: { quote },
        }: QuoteResponse = await response.json();

        dispatch(
          quotesActions.addQuotes({
            quote: quote.quote,
            author: quote.author,
            id: quote.id,
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

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
