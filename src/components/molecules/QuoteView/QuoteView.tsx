import { LayoutChangeEvent, LayoutRectangle, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Text } from "@atoms";
import { QuoteViewProps } from "./types";

const QuoteView = ({ currentQuote }: QuoteViewProps) => {
  const [containerLayout, setContainerLayout] = useState<LayoutRectangle>();

  const handleOnLayout = (event: LayoutChangeEvent) => {
    if (!containerLayout) {
      setContainerLayout(event.nativeEvent.layout);
    }
  };
  return (
    <View onLayout={handleOnLayout} style={styles.quoteContainer}>
      {containerLayout ? (
        <>
          <Text
            allowFontScaling
            allowAutoSize
            align="center"
            color="primaryContrast"
            containerLayout={containerLayout}
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
        </>
      ) : null}
    </View>
  );
};

export default QuoteView;
