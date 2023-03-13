import { Routes, Route } from 'react-router-dom';
import Home from './pages/pos/Home';
import '../src/css/App.css'
import '../src/css/POS.css'
import POSProvider from './contexts/POSContext';
import Order from './pages/POS/Order';
import Dashboard from './pages/POS/Dashboard';
import Admin from './pages/Admin';
import Notifications from './pages/Notifications';


function App() {

  return (
      <>
      <POSProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </POSProvider>
      <Routes>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Routes>
        <Route path='/notifications' element={<Notifications/>}/>
      </Routes>
      </>
  )
}

export default App
