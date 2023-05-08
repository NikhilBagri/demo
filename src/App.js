import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/Signin/signIn";
import Index from "./Components";
import { AuthContextProvider } from "./Context/AuthContext";
import Protected from "./Components/protected";
// import Dashboard from './Dashboard'

function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Index />
              </Protected>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
      {/* {/* <LineChart/> */}
    </div>
  );
}

export default App;
