import React from 'react';
import {StyleSheet} from 'react-native';
import {FScrollView, RowUI, FView, UIText, OpenLink} from '../../UI';

type TFeatures = {
  title: string;
  description: string;
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
    documentationLink: 'https://reactnavigation.org/',
  },
  {
    title: 'React Native Vector Icons',
    documentationLink: 'https://github.com/oblador/react-native-vector-icons',
  },
  {
    title: 'React Native Firebase (app / messaging)',
    documentationLink: 'https://rnfirebase.io/',
  },
  {
    title: 'Formik',
    extraContent: '(for form validation)',
    documentationLink: 'https://jaredpalmer.com/formik/docs/overview',
  },
  {
    title: 'Yup',
    extraContent: '(for form validation)',
    documentationLink: 'https://github.com/jquense/yup',
  },
];

const features: TFeatures[] = [
  {
    title: 'FCM Notification',
    description:
      'A base setup for FCM has been established, do the required changes in MainActivity.java file',
    imageURL: '',
  },
  {
    title: 'Local Notification (RN Push Notification) ',
    description: 'Support for foreground notification and scheduled notification has been added',
    imageURL: '',
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
      'Custom UI like Text, View, ScrollView, Bottom Sheet etc are created, for easy usage and less boilerplate code',
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
      {preInstalledPackages.map(({title, extraContent, documentationLink}, key) => (
        <RowUI {...{key, style: styles.center}}>
          <FView>
           <UIText>{title}</UIText>
            {!!extraContent?.length && <UIText>{extraContent}</UIText>}
            <OpenLink {...{url: documentationLink}}>
           <UIText>Docs</UIText>
           </OpenLink> 
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
