import './App.css';
import Sidebar from './Components/Sidebar/sideBar';
import Dashboard from './Components/Dashboard/dashBoard';
import Activity from './Components/Activity/activity';
import Header from './Components/Header/header';
import Product from './Components/Product/product';
import Schedule from './Components/Schedule/schedule';
import SignIn from './Components/Signin/signIn';
// import Dashboard from './Dashboard'

function App() {
  return (
    <div >
      {/* <SignIn/> */}
      <Header/>
      <Dashboard/>
      <Sidebar/>
      <Activity/>
      <Product/>
      <Schedule/>
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
