import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";

// firebase 설정
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9x8eiIZ9ZrdVrcBLv1RRKt8a7kw7KzFk",
  authDomain: "virtual-firefly-329807.firebaseapp.com",
  projectId: "virtual-firefly-329807",
  storageBucket: "virtual-firefly-329807.appspot.com",
  messagingSenderId: "250897719085",
  appId: "1:250897719085:web:68cadcd4fdbf5a0b78bda4",
  measurementId: "G-D336EBJYYY",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const GlobalContext = createContext(null);

/* 
 img를 업데이트하기위해 apollo-upload-client설치
 typescript 설치 yarn add @types/apollo-upload-client 
 */

function MyApp({ Component, pageProps }: AppProps) {
  const [myAaccessToken, setMyAccessToken] = useState("");
  const [myuserInfo, setMyUserInfo] = useState({});
  const myValue = {
    accessToken: myAaccessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myuserInfo,
    setUserInfo: setMyUserInfo,
  };

  const uploadlink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAaccessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadlink as unknown as ApolloLink]),
    cache: new InMemoryCache(), // state
  });
  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
