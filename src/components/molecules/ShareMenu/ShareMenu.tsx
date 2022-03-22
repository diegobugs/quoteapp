import {
  Linking,
  PermissionsAndroid,
  Platform,
  ScrollView,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Share, { ShareSheet } from "react-native-share";
import { Button, Icon, Text } from "@atoms";
import { useTheme } from "@react-navigation/native";
import { strings, ThemeType } from "@utils";
import { ShareContext, useShare } from "@hooks";
import { styles } from "./styles";
import Clipboard from "@react-native-community/clipboard";
import CameraRoll from "@react-native-community/cameraroll";

type ApplicationList =
  | "whatsapp"
  | "telegram"
  | "instagram"
  | "facebook"
  | "twitter";

const ShareMenu = () => {
  const theme = useTheme() as ThemeType;
  const { isVisible, options } = useContext(ShareContext).state;
  const { hideShare } = useShare();

  const [canOpenWhatsapp, setCanOpenWhatsapp] = useState(false);
  const [canOpenFacebook, setCanOpenFacebook] = useState(false);
  const [canOpenInstagram, setCanOpenInstagram] = useState(false);
  const [canOpenTwitter, setCanOpenTwitter] = useState(false);
  const [canOpenTelegram, setCanOpenTelegram] = useState(false);

  const canOpen = async (application: ApplicationList) => {
    try {
      switch (application) {
        case "whatsapp":
          return await Linking.canOpenURL("whatsapp://send");
        case "facebook":
          return await Linking.canOpenURL("fb://page");
        case "instagram":
          return await Linking.canOpenURL("instagram://tag");
        case "telegram":
          return await Linking.canOpenURL("tg://");
        case "twitter":
          return await Linking.canOpenURL("twitter://timeline");
        default:
          return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  useEffect(() => {
    const verifyApps = async () => {
      setCanOpenFacebook(await canOpen("facebook"));
      setCanOpenWhatsapp(await canOpen("whatsapp"));
      setCanOpenTwitter(await canOpen("twitter"));
      setCanOpenTelegram(await canOpen("telegram"));
      setCanOpenInstagram(await canOpen("instagram"));
    };
    verifyApps();
  }, []);

  const handleMorePress = () => {
    try {
      hideShare();
      Share.open({
        url: options?.file,
        message: options?.text,
        failOnCancel: false,
        title: "Quote.jpg",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === "granted";
  };

  const handleSavePress = async () => {
    try {
      // Write file to device
      if (options.file) {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
          return;
        }
        CameraRoll.save(options.file, { album: "Quoteapp" });
      }
      hideShare();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopyPress = () => {
    if (options.text) {
      Clipboard.setString(options.text);
    }
    hideShare();
  };

  const handleWhatsappPress = () => {
    try {
      Share.shareSingle({
        url: options.file,
        social: Share.Social.WHATSAPP,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookPress = () => {
    try {
      Share.shareSingle({
        url: options.file,
        social: Share.Social.FACEBOOK,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInstagramPress = () => {
    try {
      Share.shareSingle({
        backgroundImage: options.file,
        social: Share.Social.INSTAGRAM_STORIES,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleTwitterPress = () => {
    try {
      Share.shareSingle({
        url: options.file,
        social: Share.Social.TWITTER,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleTelegramPress = () => {
    try {
      Share.shareSingle({
        url: options.file,
        social: Share.Social.TELEGRAM,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ShareSheet
      visible={isVisible}
      style={styles.container(theme)}
      onCancel={hideShare}
    >
      {/* @ts-ignore */}
      <View style={styles.content}>
        <ScrollView horizontal style={styles.appsContainer}>
          {canOpenWhatsapp && (
            <Button
              disableShadow
              style={styles.button}
              onPress={handleWhatsappPress}
            >
              <Icon icon="whatsapp" width={32} height={32} />
              <Text numberOfLines={1} style={styles.buttonText}>
                Whatsapp
              </Text>
            </Button>
          )}
          {canOpenFacebook ? (
            <Button
              disableShadow
              style={styles.button}
              onPress={handleFacebookPress}
            >
              <Icon icon="facebook" width={32} height={32} />
              <Text numberOfLines={1} style={styles.buttonText}>
                Facebook
              </Text>
            </Button>
          ) : null}
          {canOpenInstagram ? (
            <Button
              disableShadow
              style={styles.button}
              onPress={handleInstagramPress}
            >
              <Icon icon="instagram" width={32} height={32} />
              <Text numberOfLines={1} style={styles.buttonText}>
                Instagram
              </Text>
            </Button>
          ) : null}
          {canOpenTwitter ? (
            <Button
              disableShadow
              style={styles.button}
              onPress={handleTwitterPress}
            >
              <Icon icon="twitter" width={32} height={32} />
              <Text numberOfLines={1} style={styles.buttonText}>
                Twitter
              </Text>
            </Button>
          ) : null}
          {canOpenTelegram ? (
            <Button
              disableShadow
              style={styles.button}
              onPress={handleTelegramPress}
            >
              <Icon icon="telegram" width={32} height={32} />
              <Text numberOfLines={1} style={styles.buttonText}>
                Telegram
              </Text>
            </Button>
          ) : null}
          <Button disableShadow style={styles.button} onPress={handleMorePress}>
            <Icon icon="shareNodes" width={32} height={32} />
            <Text numberOfLines={1} style={styles.buttonText}>
              {strings.More}
            </Text>
          </Button>
        </ScrollView>
        <View style={styles.optionsContainer}>
          <Button disableShadow style={styles.button} onPress={handleCopyPress}>
            <Icon icon="copy" width={32} height={32} />
            <Text numberOfLines={1} style={styles.buttonText}>
              {strings.Copy}
            </Text>
          </Button>
          <Button disableShadow style={styles.button} onPress={handleSavePress}>
            <Icon icon="download" width={32} height={32} />
            <Text numberOfLines={1} style={styles.buttonText}>
              {strings.Save}
            </Text>
          </Button>
        </View>
      </View>
    </ShareSheet>
  );
};

export default ShareMenu;
