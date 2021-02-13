import { ReactChild, ReactFragment } from "react";
import { wrapper } from "../store/store";

export interface AppProps {
  Component: any;
  pageProps: any;
}

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
