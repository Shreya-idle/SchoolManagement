import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  dashboard: undefined;
  teachers: undefined;
  students: undefined;
  billing: undefined;
  settings: undefined;
  exams: undefined;
  features: undefined;
  [key: string]: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
