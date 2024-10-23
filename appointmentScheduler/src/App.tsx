import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ScheduleAppointment from "./components/ScheduleAppointment";

const App = () => {
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { currentUser } = useAuth() ?? {};

    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/schedule-appointment/:userId"
            element={
              <ProtectedRoute>
                <ScheduleAppointment />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
