import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "store/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import LoginPage from "components/LoginPage";
import PrivateRoute from "routes/PrivateRoute";
import ThankYou from "components/ThankYou";
import App from "App";

import { Conatact } from "stateSlice/userDataSlice";

import { useState} from "react";
import { useContactContext, IContact, IContactType } from "contexts";

const persistor = persistStore(store);

const View = () => {
  const [contact, setContact] = useState<IContactType>([] as IContactType);
  return (
    <>
      <useContactContext.Provider value={{contact,setContact}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Routes>
                <Route path="/" element={<App />} />
                <Route
                  path="/thanks"
                  element={
                    <PrivateRoute>
                      <ThankYou />
                    </PrivateRoute>
                  }
                />
                <Route path="/LoginPage" element={<LoginPage />} />
              </Routes>
            </Router>
          </PersistGate>
        </Provider>
      </useContactContext.Provider>
    </>
  );
};

export default View;
