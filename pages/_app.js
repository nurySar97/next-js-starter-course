import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import "./../styles/globals.css";
import "./../website/website__style.css";
import store from "./../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
