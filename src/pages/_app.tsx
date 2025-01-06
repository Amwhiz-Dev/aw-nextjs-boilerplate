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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PrimeReactProvider>
        <NetworkStatusProvider>
          <HomeLayout>
            <Component {...pageProps} />
          </HomeLayout>
        </NetworkStatusProvider>
      </PrimeReactProvider>
    </Provider>
  );
}
