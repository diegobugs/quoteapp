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
import React, { useCallback, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ViewShot from "react-native-view-shot";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { scale } from "react-native-size-matters";
import uuid from "react-native-uuid";

type QuoteResponse = {
  data: {
    quote: QuoteType;
  };
};

interface QuoteScreenProps {
  navigation: NavigationProp<MainStackParamList, "Quote">;
}

const QuoteScreen = ({ navigation }: QuoteScreenProps) => {
  const theme = useTheme() as ThemeType;
  const quoteRedux = useSelector((state: RootStoreType) => state.quotes);
  const settings = useSelector((state: RootStoreType) => state.settings);
  const dispatch = useDispatch();
  const [currentQuote, setCurrentQuote] = useState<QuoteType>();
  const [snapRef, setSnapRef] = useState<ViewShot>();
  const ref = useRef<ViewShot>(null);

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
    if (ref.current) {
      setSnapRef(ref.current);
    }
  }, [ref]);

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

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={styles.container(theme)}>
      <QuoteHeader currentQuote={currentQuote} snapRef={snapRef} />
      <ViewShot ref={ref} style={styles.quoteContainer(theme)}>
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
      </ViewShot>
      <View style={styles.bottomContainer}>
        <Button
          onPress={goToProfile}
          style={styles.button(theme)}
          disableShadow
        >
          <Icon
            icon="user"
            fill="primaryContrast"
            width={scale(24)}
            height={scale(24)}
          />
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default QuoteScreen;
