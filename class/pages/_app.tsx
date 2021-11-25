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

/* 
 img를 업데이트하기위해 apollo-upload-client설치
 typescript 설치 yarn add @types/apollo-upload-client 
 */

function MyApp({ Component, pageProps }: AppProps) {
  const uploadlink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadlink as unknown as ApolloLink]),
    cache: new InMemoryCache(), // state
  });
  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
