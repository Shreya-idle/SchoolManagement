import React from 'react';
import { WebView } from 'react-native-webview';


interface CustomWebViewProps {


  // Add any additional custom props here
}

const WebViewComponent: React.FC<CustomWebViewProps> = (props) => {
  const handleShouldStartLoadWithRequest = (request: {
    url: string;
    loading?: boolean;
    title?: string;
    canGoBack?: boolean;
    canGoForward?: boolean;
    lockIdentifier?: number;
  }) => {
    return request.url.startsWith('http://localhost:8081');
  };

  return (
    <WebView
      {...props}
      source={{
        uri: 'http://localhost:8081',
        headers: {
          'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost:8081; connect-src 'self' ws://localhost:8081 http://localhost:8081;"
        }
      }}
      onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
    />
  );
};

export default WebViewComponent;
