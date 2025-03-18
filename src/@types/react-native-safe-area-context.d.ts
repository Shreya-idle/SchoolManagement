declare module 'react-native-safe-area-context' {
  import { SafeAreaViewProps } from 'react-native';
  const SafeAreaView: React.FC<SafeAreaViewProps>;
  const SafeAreaProvider: React.FC;
  const useSafeAreaInsets: () => { top: number; right: number; bottom: number; left: number; };
}
export default SafeAreaView;
export  {SafeAreaProvider};
export {useSafeAreaInsets};