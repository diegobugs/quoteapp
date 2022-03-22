import { View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Text } from "@atoms";
import { QuoteViewProps } from "./types";

const QuoteView = ({ currentQuote }: QuoteViewProps) => {
  return (
    <View>
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
