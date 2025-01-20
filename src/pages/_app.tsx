import "@codeBase/src/styles/globals.scss";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import type { AppProps } from "next/app";
import { NetworkStatusProvider } from "@codeBase/src/state-management/NetworkStatus";
import HomeLayout from "@codeBase/src/layout/Portal";
import { store } from "../state-management/redux/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { LanguageProvider } from "../state-management/Language";
import i18n from "../helpers/i18n";

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Prevent rendering during the server-to-client hydration phase
    return null;
  }
  return (
    <Provider store={store}>
      <PrimeReactProvider>
      <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <NetworkStatusProvider>
          <HomeLayout>
            <Component {...pageProps} />
          </HomeLayout>
        </NetworkStatusProvider>
        </LanguageProvider></I18nextProvider>
      </PrimeReactProvider>
    </Provider>
  );
}
