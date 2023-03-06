import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RoutesT } from "routes";
import "./App.css";
import { Private } from "routes/private";
import { Public } from "routes/public";

import store from "store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          
            <Router>
              <Routes>
                {RoutesT?.map((ele, key): any => (
                  <Route
                    key={key}
                    path={ele.path}
                    element={
                      ele.restricted ? (
                        <Private component={ele.element} />
                      ) : (
                        <Public component={ele.element} />
                      )
                    }
                  />
                ))}
              </Routes>
            </Router>
          
        </PersistGate>
      </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
