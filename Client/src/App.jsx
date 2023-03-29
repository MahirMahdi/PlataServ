import "react-datepicker/dist/react-datepicker.css";
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/POS/Menu';
import '../src/css/App.css';
import Order from './pages/POS/Order';
import Dashboard from './pages/POS/Dashboard';
import Admin from './pages/Admin';
import Alerts from './pages/Alerts';
import Login from './pages/Login';
import RequireAuth from './components/Route/RequireAuth';
import BankingInformation from './pages/Finance/BankingInformation';
import CashReport from './pages/Finance/CashReport';
import SalesDetails from './pages/Sales/Details';
import SalesChart from './pages/Sales/Chart';
import SpeedOfService from './pages/Sales/SpeedOfService';
import Inventory from './pages/Inventory/Inventory';
import Waste from './pages/Inventory/Waste';
import Purchases from './pages/Inventory/Purchases';
import FoodBank from './pages/Inventory/FoodBank';
import Layout from './components/Route/Layout';
import PersistLogin from "./components/Route/PersistentLogin";
import RouteHandler from "./components/Route/RouteHandler";
import Unauthorized from "./components/Error/Unauthorized";
import Missing from "./components/Error/Missing";
import Logout from "./components/Route/Logout";

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/unauthorized" element={<Unauthorized/>}/>
          <Route element={<PersistLogin/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path="/" element={<RouteHandler/>}/>
            <Route element={<RequireAuth allowedRoles={'Cashier'}/>}>
                <Route path='/menu' element={<Menu/>}/> 
                <Route path='/order' element={<Order/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>
            <Route element={<RequireAuth allowedRoles={'Manager'}/>}>
                <Route path='/report/bank-info' element={<BankingInformation/>}/>
                <Route path='/report/cash' element={<CashReport/>}/>
                <Route path='/report/sales-details' element={<SalesDetails/>}/>
                <Route path='/report/sales-chart' element={<SalesChart/>}/>
                <Route path='/report/speed-of-service' element={<SpeedOfService/>}/>
                <Route path='/report/inventory' element={<Inventory/>}/>  
                <Route path='/report/waste' element={<Waste/>}/> 
                <Route path='/report/purchases' element={<Purchases/>}/>
                <Route path='/report/foodbank' element={<FoodBank/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/alerts' element={<Alerts/>}/>   
            </Route>
          </Route>
          <Route path="*" element={<Missing/>} />
        </Route>
      </Routes>
  );
}
