import { Button, Icon, Text } from "@atoms";
import { QuoteHeader, QuoteView } from "@molecules";
import { MainStackParamList } from "@navigator";
import {
  NavigationProp,
  useFocusEffect,
  useTheme,
} from "@react-navigation/native";
import { quotesActions, RootStoreType } from "@store";
import { QuoteType, ThemeType } from "@utils";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";

interface QuoteScreenProps {
  navigation: NavigationProp<MainStackParamList, "Quote">;
}

const QuoteScreen = ({ navigation }: QuoteScreenProps) => {
  const theme = useTheme() as ThemeType;
  const quoteRedux = useSelector((state: RootStoreType) => state.quotes);
  const settings = useSelector((state: RootStoreType) => state.settings);
  const dispatch = useDispatch();
  const [currentQuote, setCurrentQuote] = useState<QuoteType>();

  useFocusEffect(
    useCallback(() => {
      if (quoteRedux) {
        const nowAndLastQuote = moment
          .duration(moment().diff(quoteRedux.lastQuoteTime))
          .asMinutes();

        if (nowAndLastQuote > settings.newQuoteInterval!) {
          fetchQuotes();
        }
      }
    }, [quoteRedux])
  );

  useEffect(() => {
    if (quoteRedux) {
      if (quoteRedux.quotes.length > 0) {
        let quotes = quoteRedux.quotes[quoteRedux.quotes.length - 1];
        setCurrentQuote(quotes);
      } else {
        fetchQuotes();
      }
    }
  }, [quoteRedux]);

  const fetchQuotes = async () => {
    try {
      const quote = await require("./exampleQuote.json");
      dispatch(quotesActions.addQuotes(quote));
    } catch (error) {
      console.error(error);
    }
  };

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={styles.container(theme)}>
      <QuoteHeader currentQuote={currentQuote} />
      <View style={styles.quoteContainer}>
        {currentQuote ? (
          <QuoteView currentQuote={currentQuote} />
        ) : (
          <Text
            allowFontScaling
            align="center"
            color="primaryContrast"
            style={styles.quoteText}
          >
            ...
          </Text>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <Button
          onPress={goToProfile}
          style={styles.button(theme)}
          disableShadow
        >
          <Icon icon="user" fill="primaryContrast" width={24} height={24} />
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default QuoteScreen;
