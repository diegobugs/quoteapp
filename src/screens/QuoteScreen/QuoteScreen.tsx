import { Button, Icon, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { ThemeType } from "@utils";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

interface QuoteScreenProps {
  navigation: NavigationProp<MainStackParamList, "Quote">;
}

const QuoteScreen = ({ navigation }: QuoteScreenProps) => {
  const theme = useTheme() as ThemeType;

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={styles.container(theme)}>
      <View style={styles.header}>
        <Icon
          icon="quoteLeft"
          fill="primaryContrast"
          style={{ opacity: 0.6 }}
          width={100}
          height={100}
        />
        <View style={styles.quoteButtons}>
          <Button style={styles.button(theme)} disableShadow>
            <Icon
              icon="starOff"
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
      <View style={styles.quoteContainer}>
        <Text
          allowFontScaling
          align="center"
          color="primaryContrast"
          style={styles.quoteText}
        >
          Its just me
        </Text>
        <Text
          allowFontScaling
          align="center"
          color="primaryContrast"
          style={styles.quoteAuthorText}
        >
          Prateek Sharma
        </Text>
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
