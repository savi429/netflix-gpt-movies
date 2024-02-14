import { Provider } from "react-redux";
import store, { persitedStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
// import Body from "./components/Body";
import Layout from "./components/Layout";
// import backgroundImg from "./assets/netflix_bg.jpg";
function App() {
  return (
    <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
      <PersistGate loading={null} persistor={persitedStore}>
        <Provider store={store}>
          <Layout>
            <Outlet />
          </Layout>
        </Provider>
      </PersistGate>
    </ErrorBoundary>
  );
}

export default App;
