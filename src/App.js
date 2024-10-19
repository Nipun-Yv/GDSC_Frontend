import logo from './logo.svg';
import './App.css';
import EntryPage from "./core_pages/EntryPage"
import {Routes,Route} from "react-router-dom"
import Success from './core_pages/Success';
import ProtectedRoute from './components/ProtectedRoute';
import AboutUs from './core_pages/AboutUs';
import Profile from './core_pages/Profile';
function App() {
  return (
    <div className="app">
            <Routes>
              <Route path="/" element={<ProtectedRoute><EntryPage/></ProtectedRoute>} />
              <Route path="/user" element={<Success/>}/>
              <Route path="/about" element={<AboutUs/>}/>
              <Route path="/profile" element={<Profile/>}/>
           </Routes>
    </div>
  );
}

export default App;
