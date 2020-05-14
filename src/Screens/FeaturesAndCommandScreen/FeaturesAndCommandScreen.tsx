import React from 'react';
import { StyleSheet } from 'react-native';
import { FScrollView, RowUI, FView, UIText, OpenLink } from '../../UI';
import theme from '../../theme';

type TFeatures = {
  title: string;
  description: string;
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
  },
  {
    title: 'Local Notification (RN Push Notification) ',
    description: 'Support for foreground notification and scheduled notification has been added',
  },
  {
    title: 'Authentication screen',
    description:
      'Every application has a requirement for authentication, a formik validation support is added along with it',
  },
  {
    title: 'UI Support',
    description:
      'Custom UI like Text, View, ScrollView, Bottom Sheet etc are created, for easy usage and less boilerplate code',
  },
  {
    title: 'Custom Hooks',
    description:
      'useBooleanState (with default false value), useStringState (with default value as empty string)',
  },
];

export default function FeaturesAndCommandScreen() {
  return (
    <FScrollView style={styles.container}>
      {preInstalledPackages.map(({ title, extraContent, documentationLink }, key) => (
        <RowUI {...{ key, style: { ...styles.center, ...styles.itemContainer }, }}>
          <OpenLink {...{ url: documentationLink }}>
            <UIText style={styles.headingText}>{title}</UIText>
            {!!extraContent?.length && <UIText>{extraContent}</UIText>}
            <UIText style={styles.openLinkText}>Docs</UIText>
          </OpenLink>
        </RowUI>
      ))}
      {features.map(({ title, description }, key) => (
        <RowUI {...{ key, style: { ...styles.center, ...styles.itemContainer }, }}>
          <FView>
            <UIText style={styles.headingText}>{title}</UIText>
            <UIText>{description}</UIText>
          </FView>
        </RowUI>
      ))}
    </FScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    margin: 10
  },
  itemContainer: {
    paddingHorizontal: 10
  },
  container: {
    backgroundColor: theme.baseColor + 30
  },
  headingText: {
    color: theme.stongPrimary,
    fontWeight: "bold",
    fontSize: 15
  },
  openLinkText: {
    color: theme.primaryColor,
  }
});
