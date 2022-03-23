import { Button, Text } from "@atoms";
import { MainStackParamList } from "@navigator";
import { RouteProp, useTheme } from "@react-navigation/native";
import { DayStringType, ReminderType, strings, ThemeType } from "@utils";
import React, { useCallback, useState } from "react";
import { Alert, Platform, Pressable, ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { remindersActions } from "@store";
import uuid from "react-native-uuid";
import { useCheckDarkMode } from "@hooks";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface AddReminderScreenProps {
  navigation: NativeStackNavigationProp<MainStackParamList, "AddReminder">;
  route: RouteProp<MainStackParamList, "AddReminder">;
}

const DAYS: Array<DayStringType> = ["Su", "M", "Tu", "W", "Th", "F", "S"];

const AddReminderScreen = ({ navigation, route }: AddReminderScreenProps) => {
  const theme = useTheme() as ThemeType;
  const paramReminder = route.params?.reminder;
  const [selectedDays, setSelectedDays] = useState<Array<DayStringType>>(
    paramReminder?.days ?? []
  );
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useCheckDarkMode();

  const isActiveDay = useCallback(
    (thisDay: DayStringType, days: Array<DayStringType>) => {
      return days.includes(thisDay);
    },
    []
  );
  const [time, setTime] = useState(
    paramReminder?.time ? new Date(paramReminder.time) : new Date()
  );

  const onChangeDate = (selectedTime: Date | undefined) => {
    if (selectedTime) {
      setTime(selectedTime);
      setIsDatePickerVisible(false);
    }
  };

  const selectDay = (day: DayStringType) => {
    if (isActiveDay(day, selectedDays)) {
      const filtered = selectedDays.filter((v) => v !== day);
      setSelectedDays(filtered);
    } else {
      setSelectedDays((prev) => [...prev, day]);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const saveReminder = () => {
    if (selectedDays.length === 0) {
      if (Platform.OS === "android") {
        ToastAndroid.show(strings.ErrorSelectDay, ToastAndroid.SHORT);
      } else {
        Alert.alert(strings.ErrorSelectDay);
      }
      return;
    }

    if (paramReminder) {
      const reminder: ReminderType = {
        id: paramReminder.id,
        time: time.getTime(),
        days: selectedDays,
      };
      dispatch(remindersActions.updateReminder(reminder));
    } else {
      const reminder: ReminderType = {
        id: uuid.v1(),
        time: time.getTime(),
        days: selectedDays,
      };
      dispatch(remindersActions.setReminders(reminder));
    }
    navigation.goBack();
  };

  const handleChangeTime = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.timeContainer}>
        <Pressable onPress={handleChangeTime}>
          <Text fontWeight="lighter" style={styles.timeText}>
            {moment(time).format("HH:mm")}
          </Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          display="spinner"
          onConfirm={onChangeDate}
          onCancel={hideDatePicker}
          locale="en_EN"
          is24Hour={true}
          date={time}
          themeVariant={isDarkMode ? "dark" : "light"}
        />
      </View>
      <View style={styles.flex}>
        <View style={styles.daysContainer(theme)}>
          {DAYS.map((day, index) => {
            return (
              <Pressable key={index} onPress={() => selectDay(day)}>
                <View
                  style={[
                    styles.day,
                    isActiveDay(day, selectedDays) && styles.daySelected(theme),
                  ]}
                >
                  <Text color="primaryContrast" fontWeight="bold">
                    {strings[day]}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
      <View style={styles.row}>
        <Button variant="text" style={styles.flex} onPress={goBack}>
          {strings.Cancel}
        </Button>
        <Button style={styles.flex} onPress={saveReminder}>
          {strings.Add}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default AddReminderScreen;
