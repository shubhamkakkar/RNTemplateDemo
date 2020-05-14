import messaging from '@react-native-firebase/messaging';
import {useEffect, useState} from 'react';
import {useBooleanState, useStringState} from '../customHooks/';
import useRNPushNotification, {TOnNotificationResponse} from './useRNPushNotification';
export type TuseFCMReturn = {
  loader: boolean;
  fcmToken: string;
  remoteMessage: any;
  rnPushNotification: TOnNotificationResponse
};

export default function useFCM(): TuseFCMReturn {
  const [loader, , setLoader] = useBooleanState(true);
  const [fcmToken, setFcmToken] = useStringState();
  const [remoteMessage, setRemoteMessage] = useState<any>();
  const {  rnPushNotification,
    runPushNotification,} = useRNPushNotification()

  async function registerAppWithFCM() {
    await messaging().registerDeviceForRemoteMessages();
  }
  async function requestUserPermission() {
    const settings = await messaging().requestPermission();

    if (settings) {
      console.log('Permission settings:', settings);
    }
  }

  function onNotificationOpenedApp() {
    messaging().onNotificationOpenedApp(remoteMessage => setRemoteMessage(remoteMessage));
  }

  function getInitialNotification() {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => setRemoteMessage(remoteMessage));
  }

  function getToken() {
    messaging()
      .getToken()
      .then(token => {
        setFcmToken(token);
        setLoader(false);
      });
  }

  function firebaseMessageCalls(): void {
    registerAppWithFCM();
    requestUserPermission();
    getToken();
    messaging.NotificationAndroidPriority.PRIORITY_MAX;
    messaging.NotificationAndroidVisibility.VISIBILITY_PUBLIC;
    messaging.AuthorizationStatus.AUTHORIZED;
    onNotificationOpenedApp();
    getInitialNotification();
  }
  useEffect(() => {
    firebaseMessageCalls();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // react native push notification
      runPushNotification(
          remoteMessage.notification?.title || 'Title',
          remoteMessage.notification?.body || 'body',
      );
    });

    return () => {
      messaging().onTokenRefresh(token => {
        setFcmToken(token);
        setLoader(false);
      }),
        unsubscribe;
    };
  }, []);

  return {
    loader,
    fcmToken,
    remoteMessage,
    rnPushNotification,
  };
}
