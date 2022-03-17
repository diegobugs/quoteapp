import { Icon, ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { NavigationProp, useTheme } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { RootStoreType, settingsActions } from "@store";
import { LanguageType, strings, ThemeType } from "@utils";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { Edge, SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";

interface LanguageScreenProps {
  navigation: NavigationProp<MainStackParamList, "Language">;
}

const LanguageScreen = ({ navigation }: LanguageScreenProps) => {
  const theme = useTheme() as ThemeType;
  const headerHeight = useHeaderHeight();
  const appConfigured = useSelector(
    (state: RootStoreType) => state.settings.appConfigured
  );
  const [selectedLang, setSelectedLang] = useState(
    useSelector((state: RootStoreType) => state.settings.language)
  );
  const dispatch = useDispatch();

  const selectLanguage = (lang: LanguageType) => {
    setSelectedLang(lang);
    dispatch(settingsActions.setSettings({ language: lang }));
    strings.setLanguage(lang);
    if (appConfigured) {
      navigation.reset({ index: 0, routes: [{ name: "Splash" }] });
    } else {
      dispatch(settingsActions.setSettings({ appConfigured: true }));
      navigation.reset({
        index: 0,
        routes: [{ name: "Quote" }, { name: "Reminder" }],
      });
    }
  };

  const edges: Edge[] = ["bottom", "left", "right", "top"];
  const validEdges: Edge[] =
    headerHeight > 0 ? edges.filter((e) => e !== "top") : edges;

  return (
    <SafeAreaView style={styles.container} edges={validEdges}>
      <Icon icon="language" fill="primary" width={100} height={100} />
      <Text style={styles.title}>{strings.SetYourLanguage}</Text>
      <ScrollView>
        <Pressable onPress={() => selectLanguage("ES")}>
          <ListItem
            style={styles.optionText}
            divider
            startIcon="spain"
            primaryText="Español"
            onActionPress={() => selectLanguage("ES")}
            actionIcon="check"
            {...(selectedLang !== "ES" && { disableActionIcon: true })}
          />
        </Pressable>
        <Pressable onPress={() => selectLanguage("EN")}>
          <ListItem
            style={styles.optionText}
            divider
            startIcon="usa"
            primaryText="English"
            onActionPress={() => selectLanguage("EN")}
            actionIcon="check"
            {...(selectedLang !== "EN" && { disableActionIcon: true })}
          />
        </Pressable>
        <Pressable onPress={() => selectLanguage("PT")}>
          <ListItem
            style={styles.optionText}
            startIcon="brazil"
            primaryText="Português"
            onActionPress={() => selectLanguage("PT")}
            actionIcon="check"
            {...(selectedLang !== "PT" && { disableActionIcon: true })}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LanguageScreen;
