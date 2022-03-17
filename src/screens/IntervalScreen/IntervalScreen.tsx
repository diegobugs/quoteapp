import { ListItem, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStoreType, settingsActions } from "@store";
import { strings, ThemeType } from "@utils";
import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";

interface IntervalScreenProps {
  navigation: NativeStackNavigationProp<MainStackParamList, "Interval">;
}

const IntervalScreen = ({ navigation }: IntervalScreenProps) => {
  const theme = useTheme() as ThemeType;
  const [selectedInterval, setSelectedInterval] = useState(
    useSelector((state: RootStoreType) => state.settings.newQuoteInterval)
  );
  const dispatch = useDispatch();

  const selectInterval = (interval: number) => {
    setSelectedInterval(interval);
    dispatch(settingsActions.setSettings({ newQuoteInterval: interval }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings.SetYourInterval}</Text>
      <ScrollView>
        <Pressable onPress={() => selectInterval(1)}>
          <ListItem
            style={styles.optionText}
            divider
            primaryText="1 min"
            onActionPress={() => selectInterval(1)}
            actionIcon="check"
            {...(selectedInterval !== 1 && { disableActionIcon: true })}
          />
        </Pressable>
        <Pressable onPress={() => selectInterval(5)}>
          <ListItem
            style={styles.optionText}
            divider
            primaryText="5 min"
            onActionPress={() => selectInterval(5)}
            actionIcon="check"
            {...(selectedInterval !== 5 && { disableActionIcon: true })}
          />
        </Pressable>
        <Pressable onPress={() => selectInterval(10)}>
          <ListItem
            style={styles.optionText}
            divider
            primaryText="10 min"
            onActionPress={() => selectInterval(10)}
            actionIcon="check"
            {...(selectedInterval !== 10 && { disableActionIcon: true })}
          />
        </Pressable>
        <Pressable onPress={() => selectInterval(30)}>
          <ListItem
            style={styles.optionText}
            divider
            primaryText="30 min"
            onActionPress={() => selectInterval(30)}
            actionIcon="check"
            {...(selectedInterval !== 30 && { disableActionIcon: true })}
          />
        </Pressable>
        <Pressable onPress={() => selectInterval(60)}>
          <ListItem
            style={styles.optionText}
            divider
            primaryText="60 min"
            onActionPress={() => selectInterval(60)}
            actionIcon="check"
            {...(selectedInterval !== 60 && { disableActionIcon: true })}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default IntervalScreen;
