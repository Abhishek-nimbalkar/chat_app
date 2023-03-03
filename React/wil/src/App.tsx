import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesT } from "routes";
import "./App.css";
import Login from "components/LoginPage";
import { Private } from "routes/private";
import { Public } from "routes/public";

function App() {
  return (
    <>
      <Router>
        <Routes>
        {
          RoutesT.map((ele,key)=>(
            <Route key={key} path={ele.path} element={
              ele.restricted?(<Private component={ele.element}/>):(<Public component={ele.element} />)
            }   />
          ))
        }
        </Routes>
      </Router>
    </>
  );
}

export default App;
