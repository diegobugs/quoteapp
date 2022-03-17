import { ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { quotesActions, RootStoreType } from "@store";
import { QuoteType, strings, ThemeType } from "@utils";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";

interface FavoritesScreenProps {
  navigation: NativeStackNavigationProp<MainStackParamList, "Favorites">;
}

const FavoritesScreen = ({ navigation }: FavoritesScreenProps) => {
  const theme = useTheme() as ThemeType;
  const dispatch = useDispatch();
  const quotesStore = useSelector(
    (state: RootStoreType) => state.quotes.quotes
  );
  const [quotes, setQuotes] = useState<Array<QuoteType>>([]);

  useEffect(() => {
    setQuotes(quotesStore.filter((quote) => quote.isFav));
  }, [quotesStore]);

  const onFavPress = (currentQuote: QuoteType) => {
    if (currentQuote.isFav) {
      dispatch(quotesActions.unmarkQuoteAsFavorite(currentQuote.id));
    } else {
      dispatch(quotesActions.markQuoteAsFavorite(currentQuote.id));
    }
  };

  return (
    <ScrollView style={styles.container(theme)}>
      {quotes?.length == 0 && (
        <Text style={styles.titleText}>{strings.NoFavorites}</Text>
      )}
      {quotes.length > 0
        ? quotes.map((quote, index) => (
            <Pressable key={index} onPress={() => onFavPress(quote)}>
              <ListItem
                startIcon={quote.isFav ? "starOn" : "starOff"}
                style={styles.item}
                primaryText={quote.quote}
                disableActionIcon
              />
            </Pressable>
          ))
        : null}
    </ScrollView>
  );
};

export default FavoritesScreen;
