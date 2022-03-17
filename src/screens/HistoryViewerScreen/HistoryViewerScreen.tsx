import React from "react";
import { QuoteHeader, QuoteView } from "@molecules";
import { MainStackParamList } from "@navigator";
import { RouteProp, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ThemeType } from "@utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { View } from "react-native";

interface HistoryViewerScreenProps {
  navigation: NativeStackNavigationProp<MainStackParamList, "HistoryViewer">;
  route: RouteProp<MainStackParamList, "HistoryViewer">;
}

const HistoryViewerScreen = ({
  navigation,
  route,
}: HistoryViewerScreenProps) => {
  const theme = useTheme() as ThemeType;
  const quote = route.params.quote;

  const handleBackButton = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container(theme)}>
      <QuoteHeader currentQuote={quote} onBackPress={handleBackButton} />
      <View style={styles.quoteContainer}>
        <QuoteView currentQuote={quote} />
      </View>
    </SafeAreaView>
  );
};

export default HistoryViewerScreen;
