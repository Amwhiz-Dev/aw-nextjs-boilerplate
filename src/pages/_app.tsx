import { LanguageProvider } from "@template/context/LanguageContext";
import { ThemeProvider } from "@template/context/ThemeContext";
import i18n from "@template/lib/i18n";
import "@template/styles/globals.scss";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css"; // Default theme
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import { PrimeReactProvider } from "primereact/api";
import { preFetchPath } from "@template/common/preFetch";
import { useNavigation } from "@template/hooks/useNavigation";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { preFetch } = useNavigation();

  useEffect(() => {
    preFetchPath.forEach((path) => {
      preFetch(path);
    });
  }, [preFetch]);

  return (
    <PrimeReactProvider>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <Component {...pageProps} />
          </LanguageProvider>
        </I18nextProvider>
      </ThemeProvider>
    </PrimeReactProvider>
  );
}
