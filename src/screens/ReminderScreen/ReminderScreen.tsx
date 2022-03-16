import { Button, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { useTheme } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { remindersActions, RootStoreType } from "@store";
import { DayStringType, ReminderType, strings, ThemeType } from "@utils";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, View } from "react-native";
import { Edge, SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface ReminderScreenProps {
  navigation: NativeStackNavigationProp<MainStackParamList, "Quote">;
}
interface DayProps {
  day: DayStringType;
  active: boolean;
}

const DAYS: Array<DayStringType> = ["Su", "M", "Tu", "W", "Th", "F", "S"];

const Day = ({ day, active }: DayProps) => {
  return (
    <Text
      color={active ? "success" : "primaryContrast"}
      fontWeight="bold"
      style={styles.day}
    >
      {strings[day]}
    </Text>
  );
};

const ReminderScreen = ({ navigation }: ReminderScreenProps) => {
  const theme = useTheme() as ThemeType;
  const headerHeight = useHeaderHeight();
  const edges: Edge[] = ["bottom", "left", "right", "top"];
  const validEdges: Edge[] =
    headerHeight > 0 ? edges.filter((e) => e !== "top") : edges;
  const reminderStore = useSelector((state: RootStoreType) => state.reminders);
  const [reminders, setReminders] = useState<Array<ReminderType>>([]);
  const dispatch = useDispatch();

  const isActiveDay = useCallback(
    (thisDay: DayStringType, days: Array<DayStringType>) => {
      return days.includes(thisDay);
    },
    []
  );

  useEffect(() => {
    setReminders(reminderStore);
  }, [reminderStore]);

  const goToAddReminder = () => {
    navigation.navigate("AddReminder");
  };

  const goToEditReminder = (reminder: ReminderType) => {
    navigation.navigate("AddReminder", { reminder: reminder });
  };

  const formatTime = (timestamp: number) => {
    const hour = new Date(timestamp).getHours();
    const minute = new Date(timestamp).getMinutes();
    return `${hour}:${minute}`;
  };

  const deleteReminder = (reminder: ReminderType) => {
    dispatch(remindersActions.deleteReminder(reminder));
  };

  const promptDeleteReminder = (reminder: ReminderType) => {
    Alert.alert(
      strings.PromptDeleteReminderTitle,
      strings.PromptDeleteReminderMessage,
      [
        {
          text: strings.No,
          style: "cancel",
        },
        {
          text: strings.Yes,
          onPress: () => deleteReminder(reminder),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={validEdges}>
      <Text style={styles.reminderHint}>{strings.ReminderHint}</Text>
      {reminders.length > 0 ? (
        <Text style={styles.title}>{strings.RemindMe}:</Text>
      ) : null}
      <ScrollView>
        {reminders.length > 0
          ? reminders.map((reminder, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => goToEditReminder(reminder)}
                  onLongPress={() => promptDeleteReminder(reminder)}
                >
                  <View style={styles.reminderCard(theme)}>
                    <View style={styles.reminderBlock(theme)}>
                      <Text color="primaryContrast" fontWeight="bold">
                        {formatTime(reminder.time)}
                      </Text>
                    </View>
                    <View style={styles.reminderBlock(theme)}>
                      {DAYS.map((day, index) => (
                        <Day
                          key={index}
                          day={day}
                          active={isActiveDay(day, reminder.days)}
                        />
                      ))}
                    </View>
                  </View>
                </Pressable>
              );
            })
          : null}
        <Button variant="text" disableShadow onPress={goToAddReminder}>
          <Text color="primary" fontWeight="600">
            {strings.Add}
          </Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReminderScreen;
