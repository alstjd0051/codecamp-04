import "../styles/globals.css";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/layout/layout";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import Particle from "../src/commons/libraries/Particle";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9x8eiIZ9ZrdVrcBLv1RRKt8a7kw7KzFk",
  authDomain: "virtual-firefly-329807.firebaseapp.com",
  projectId: "virtual-firefly-329807",
  storageBucket: "virtual-firefly-329807.appspot.com",
  messagingSenderId: "250897719085",
  appId: "1:250897719085:web:68cadcd4fdbf5a0b78bda4",
};

const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        {/* <Particle /> */}
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
