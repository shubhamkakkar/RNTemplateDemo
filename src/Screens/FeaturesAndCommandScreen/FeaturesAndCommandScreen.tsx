import React from 'react';
import {StyleSheet} from 'react-native';
import {FScrollView, RowUI, FView, UIText} from '../../UI';

type TFeatures = {
  title: string;
  description: string;
  documentationLink?: string;
  imageURL?: string;
};

type TpreInstalledPackages = {
  title: string;
  extraContent?: string;
  documentationLink: string;
};

const preInstalledPackages: TpreInstalledPackages[] = [
  {
    title: 'React Native Navigation ',
    extraContent: '(and its related dependencies as per documentation)',
    documentationLink: '',
  },
  {
    title: 'React Native Vector Icons',
    documentationLink: '',
  },
  {
    title: 'React Native Firebase (app / messaging)',
    documentationLink: '',
  },
  {
    title: 'Formik',
    extraContent: '(for form validation)',
    documentationLink: '',
  },
  {
    title: 'Yup',
    extraContent: '(for form validation)',
    documentationLink: '',
  },
];

const features: TFeatures[] = [
  {
    title: 'FCM Notification',
    description:
      'A base setup for FCM has been established, do the required changes in MainActivity.java file',
    imageURL: '',
    documentationLink: '',
  },
  {
    title: 'Local Notification (RN Push Notification) ',
    description: 'Support for foreground notification and scheduled notification has been added',
    imageURL: '',
    documentationLink: '',
  },
  {
    title: 'Authentication screen',
    description:
      'Every application has a requirement for authentication, a formik validation support is added along with it',
    imageURL: '',
  },
  {
    title: 'UI Support',
    description:
      'Custom UI like TEXT VIEW $ SCROLLVIEW, Animated Bottom Sheet is created, for easy usage and less boilerplate code',
    imageURL: '',
  },
  {
    title: 'Custom Hooks',
    description:
      'useBooleanState (with default false value), useStringState (with default value as empty string)',
  },
];

export default function FeaturesAndCommandScreen() {
  return (
    <FScrollView>
      {preInstalledPackages.map(({title, extraContent}, key) => (
        <RowUI {...{key, style: styles.center}}>
          <FView>
            <UIText>{title}</UIText>
            {!!extraContent?.length && <UIText>{extraContent}</UIText>}
          </FView>
          <FView />
        </RowUI>
      ))}
      {features.map(({title, description}, key) => (
        <RowUI {...{key, style: styles.center}}>
          <FView>
            <UIText>{title}</UIText>
            <UIText>{description}</UIText>
          </FView>
          <FView />
        </RowUI>
      ))}
    </FScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    margin: 10,
  },
});
