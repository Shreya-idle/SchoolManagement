declare module 'react-native-webview' {
  import { Component } from 'react';
  // Removed WebViewProps import as it does not exist in the module


  export class WebView extends Component<any> {} // Using 'any' for props as WebViewProps is not available

  export default WebView;
}
