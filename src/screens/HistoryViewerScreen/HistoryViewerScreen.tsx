import React, { useEffect, useRef, useState } from "react";
import { QuoteHeader, QuoteView } from "@molecules";
import { MainStackParamList } from "@navigator";
import { RouteProp, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ThemeType } from "@utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { View } from "react-native";
import ViewShot from "react-native-view-shot";

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
  const [snapRef, setSnapRef] = useState<ViewShot>();
  const ref = useRef<ViewShot>(null);

  const handleBackButton = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (ref.current) {
      setSnapRef(ref.current);
    }
  }, [ref]);
  return (
    <SafeAreaView style={styles.container(theme)}>
      <QuoteHeader
        currentQuote={quote}
        onBackPress={handleBackButton}
        snapRef={snapRef}
      />
      <ViewShot ref={ref} style={styles.quoteContainer(theme)}>
        <QuoteView currentQuote={quote} />
      </ViewShot>
    </SafeAreaView>
  );
};

export default HistoryViewerScreen;
