import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AuthProvider from './contexts/AuthContext';
import POSProvider from './contexts/POSContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AuthProvider>
        <POSProvider>
          <Router>
            <Routes>
              <Route path='/*' element={<App/>}/>
            </Routes>
          </Router>
        </POSProvider>
      </AuthProvider>
    </React.StrictMode>
)
