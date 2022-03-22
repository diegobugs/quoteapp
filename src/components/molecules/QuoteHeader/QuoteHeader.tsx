import { View, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Button, Icon } from "@atoms";
import { useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import { QuoteHeaderProps } from "./types";
import { useDispatch } from "react-redux";
import { quotesActions } from "@store";
import { captureRef } from "react-native-view-shot";
import { useShare } from "@hooks";
import { scale } from "react-native-size-matters";

const QuoteHeader = ({
  onBackPress,
  currentQuote,
  snapRef,
}: QuoteHeaderProps) => {
  const theme = useTheme() as ThemeType;
  const dispatch = useDispatch();
  const { showShare, hideShare } = useShare();

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

  const onSharePress = async () => {
    if (snapRef) {
      try {
        const base64 = await captureRef(snapRef, {
          result: "tmpfile",
        });
        showShare({ file: base64, text: currentQuote?.quote });
      } catch (error) {
        console.error(error);
      }
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
            width={scale(24)}
            height={scale(24)}
          />
        </Pressable>
      ) : (
        <Icon
          icon="quoteLeft"
          fill="primaryContrast"
          style={{ opacity: 0.6 }}
          width={scale(100)}
          height={scale(100)}
        />
      )}
      <View style={styles.quoteButtons}>
        <Button style={styles.button(theme)} disableShadow onPress={onFavPress}>
          <Icon
            icon={currentQuote?.isFav ? "starOn" : "starOff"}
            fill="primaryContrast"
            width={scale(24)}
            height={scale(24)}
          />
        </Button>
        <Button
          style={styles.button(theme)}
          disableShadow
          onPress={onSharePress}
        >
          <Icon
            icon="share"
            fill="primaryContrast"
            width={scale(24)}
            height={scale(24)}
          />
        </Button>
      </View>
    </View>
  );
};

export default QuoteHeader;
