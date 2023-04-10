import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesA } from "routes";
import { QueryClient, QueryClientProvider } from "react-query";
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {RoutesA?.map((ele, key) => (
            <Route key={key} path={ele.path} element={ele.element} />
          ))}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
