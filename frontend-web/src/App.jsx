import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';
import Menu from './pages/Menu';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
