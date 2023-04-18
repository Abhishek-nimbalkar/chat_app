import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesA } from "routes";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "styled-components";
import { Private } from "routes/private";

export const modalState = createContext({modalIsOpen:"",openModal:(action: string)=>{},closeModal:()=>{}});
export const modalState2 = createContext({modalIsOpen:"",openModal:(action: string)=>{},closeModal:()=>{}});
const queryClient = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus:false
  }
}});

const App = () => {
  const [modalIsOpen, setIsOpen] = useState("");
  const openModal=(action: string) =>{
    // console.log("hello");
    
    setIsOpen(action);
  }
  const closeModal=()=> {
    setIsOpen("");
  }
  return (
    <QueryClientProvider client={queryClient}>
      <modalState.Provider value={{ modalIsOpen:modalIsOpen, openModal:openModal,closeModal:closeModal }}>
        <Router>
          <Routes>
            {RoutesA?.map((ele, key) => (
              <Route key={key} path={ele.path} element={ele.restricted?<Private component={ele.element} />:ele.element}  />
            ))}
          </Routes>
        </Router>
      </modalState.Provider>
    </QueryClientProvider>
  );
};

export default App;
