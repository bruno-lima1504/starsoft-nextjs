import { QueryClient, QueryClientProvider } from "react-query";
import "./styles/globals.scss";

import { Provider } from "react-redux";
import { store } from "../redux/store";

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
