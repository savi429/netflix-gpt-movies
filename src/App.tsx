import { Provider } from "react-redux";
import store, { persitedStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
      <PersistGate loading={null} persistor={persitedStore}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Outlet />
            </Layout>
            <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
          </QueryClientProvider>
        </Provider>
      </PersistGate>
    </ErrorBoundary>
  );
}

export default App;
