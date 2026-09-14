import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export const newNotification = async ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => {
  try {
    if (Platform.OS === "web") {
      if (!("Notification" in window)) {
        console.log("This browser does not support desktop notifications.");
        return;
      }
      const options = {
        body,
      };
      if (Notification.permission === "granted") {
        new Notification(title, options);
      } else if (Notification.permission !== "denied") {
        // Re-request permission if not explicitly denied
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          new Notification(title, options);
        }
      }
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
      },
      trigger: null,
    });
  } catch (e) {
    console.log(e);
  }
};

const handleNotification = () => {
  console.warn("ok! got your notif");
};

export const askNotification = async () => {
  if (Platform.OS === "web") {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        console.log(`Web Notification permission status: ${permission}`);
      });
    } else {
      console.log("Notifications are not supported on web.");
    }
    return;
  }

  const { status } = await await Notifications.requestPermissionsAsync();
  if (Constants.isDevice && status === "granted")
    console.log("Notification permissions granted.");
};

export const getListener = () =>
  Notifications.addNotificationReceivedListener(handleNotification);
