import './App.css';
import About from './Pages/About';
import Sessions from './Pages/Sessions';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SessionCreation from './Pages/SessionCreating';
import SessionDeletion from './Pages/SessionDeletion';
import Construction from './Pages/Construction';
import AdminBoard from './Pages/AdminDashboard';
import MailStore from './Pages/MailStore';

import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        
        
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/sessionsDelete" element={<SessionDeletion />} />
        <Route path="/sessionCreation" element={<SessionCreation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/adminPanel" element={<AdminBoard />} />
        <Route path="/mailList" element={<MailStore />} />
      </Routes>
    </div>
  );
}

export default App;