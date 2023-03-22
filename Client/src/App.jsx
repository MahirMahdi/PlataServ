import { Routes, Route } from 'react-router-dom';
import Menu from './pages/pos/Menu';
import '../src/css/App.css';
import Order from './pages/POS/Order';
import Dashboard from './pages/POS/Dashboard';
import Admin from './pages/Admin';
import Alerts from './pages/Alerts';
import Login from './pages/Login';
import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/RequireAuth';
import Sidebar from './components/Shared/Sidebar';

function App() {

  return (
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/new' element={<Sidebar/>}/>
        <Route element={<PersistLogin/>}>
          <Route element={<RequireAuth allowedRoles={['Cashier']}/>}>
              <Route path='/' element={<Menu/>}/> 
              <Route path='/order' element={<Order/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
          <Route element={<RequireAuth allowedRoles={['Manager', 'Supervisor']}/>}>
            <Route path='/alerts' element={<Alerts/>}/> 
          </Route>
          <Route element={<RequireAuth allowedRoles={['Manager']}/>}>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/alerts' element={<Alerts/>}/> 
          </Route>
        </Route>
      </Routes>
)
}

export default App
