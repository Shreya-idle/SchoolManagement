declare module 'react-native-safe-area-context' {
  import { SafeAreaViewProps } from 'react-native';
  export const SafeAreaView: React.FC<SafeAreaViewProps>;
  export const SafeAreaProvider: React.FC;
  export const useSafeAreaInsets: () => { top: number; right: number; bottom: number; left: number; };
}
