import { View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Text } from "@atoms";
import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import { QuoteViewProps } from "./types";

const QuoteView = ({ currentQuote }: QuoteViewProps) => {
  const theme = useTheme() as ThemeType;

  return (
    <View style={styles.quoteContainer}>
      <Text
        allowFontScaling
        align="center"
        color="primaryContrast"
        style={styles.quoteText}
      >
        {currentQuote?.quote}
      </Text>
      <Text
        allowFontScaling
        align="center"
        color="primaryContrast"
        style={styles.quoteAuthorText}
      >
        {currentQuote?.author}
      </Text>
    </View>
  );
};

export default QuoteView;
