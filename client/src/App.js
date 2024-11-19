import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import Loan from "./pages/CreateLoan";

// Custom Hooks
import { UserContext } from "./hooks/UserContext";
import useFindUser from "./hooks/useFindUser";

// Custom Routes
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [user, setUser, loading] = useFindUser();

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      <Routes>
        <Route path="/" element={<PublicRoute element={<Home />} />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/signup" element={<PublicRoute element={<SignUp />} />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
        />
        <Route path="/new/loan" element={<PrivateRoute element={<Loan />} />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
