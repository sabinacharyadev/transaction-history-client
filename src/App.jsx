import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TransactionPage from "./pages/TransactionPage";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  // state to track user
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<SignupPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        {/* Private Routes */}
        <Route
          path="/transactions"
          element={
            <PrivateRoutes>
              <TransactionPage />
            </PrivateRoutes>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
