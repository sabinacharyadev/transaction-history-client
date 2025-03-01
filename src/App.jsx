import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TransactionPage from "./pages/TransactionPage";
import { useState } from "react";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  // state to track user
  const [user, setUser] = useState({});
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<SignupPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage setUser={setUser} />} />
        {/* Private Routes */}
        <Route
          path="/transactions"
          element={
            <PrivateRoutes user={user}>
              <TransactionPage user={user} />
            </PrivateRoutes>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
