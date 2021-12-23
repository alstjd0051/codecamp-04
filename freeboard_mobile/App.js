import React from 'react';
import type {Node} from 'react';
import {WebView} from 'react-native-webview';

const App: () => Node = () => {
  return <WebView source={{uri: 'http://miiinsseong.shop/'}} />;
};

export default App;
