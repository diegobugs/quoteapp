import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Button, Icon } from "@atoms";
import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import { QuoteHeaderProps } from "./types";
import { useDispatch } from "react-redux";
import { quotesActions } from "@store";

const QuoteHeader = ({ onBackPress, currentQuote }: QuoteHeaderProps) => {
  const theme = useTheme() as ThemeType;
  const dispatch = useDispatch();

  const onFavPress = () => {
    if (!currentQuote) {
      return;
    }
    if (currentQuote?.isFav) {
      dispatch(quotesActions.unmarkQuoteAsFavorite(currentQuote.id));
    } else {
      dispatch(quotesActions.markQuoteAsFavorite(currentQuote.id));
    }
  };

  return (
    <View style={styles.header}>
      {onBackPress ? (
        <Pressable onPress={onBackPress}>
          <Icon
            icon="arrowRight"
            rotate={180}
            fill="primaryContrast"
            width={24}
            height={24}
          />
        </Pressable>
      ) : (
        <Icon
          icon="quoteLeft"
          fill="primaryContrast"
          style={{ opacity: 0.6 }}
          width={100}
          height={100}
        />
      )}
      <View style={styles.quoteButtons}>
        <Button style={styles.button(theme)} disableShadow onPress={onFavPress}>
          <Icon
            icon={currentQuote?.isFav ? "starOn" : "starOff"}
            fill="primaryContrast"
            width={24}
            height={24}
          />
        </Button>
        <Button style={styles.button(theme)} disableShadow>
          <Icon icon="share" fill="primaryContrast" width={24} height={24} />
        </Button>
      </View>
    </View>
  );
};

export default QuoteHeader;
