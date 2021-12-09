import "bootstrap/dist/css/bootstrap.css";
import "./../styles/globals.css";
import "./../website/website__style.css";
import { Provider } from "react-redux";
import store from "./../store";
import { AppWrapper } from "../components";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
}

export default MyApp;
