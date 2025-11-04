// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Feed from './pages/Feed';
// import Profile from './pages/Profile';
// import api from './api';

// function App() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const loadMe = async () => {
//     try {
//      const res = await api.get("/auth/me", {
//   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// });

//       setUser(res.data);
//     } catch (err) {
//       setUser(null);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) loadMe();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar user={user} onLogout={handleLogout} />
//       <div className="container mx-auto p-4">
//         <Routes>
//           <Route path="/" element={<Feed user={user} />} />
//           <Route path="/login" element={<Login onLogin={loadMe} />} />
//           <Route path="/signup" element={<Signup onSignup={loadMe} />} />
//           {/* <Route path="/profile" element={<Profile user={user} onUpdate={loadMe} />} /> */}
//           <Route path="/profile" element={<Profile user={user} onUpdate={setUser} />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Feed from "./pages/Feed";
// import Profile from "./pages/Profile";
// import api from "./api";

// function App() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // ✅ Load logged-in user
//   const loadMe = async () => {
//     try {
//       const res = await api.get("/users/me"); // ✅ correct endpoint
//       setUser(res.data);
//     } catch (err) {
//       console.error("Error fetching user:", err);
//       setUser(null);
//     }
//   };

//   // ✅ Load user if token exists
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) loadMe();
//   }, []);

//   // ✅ Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar user={user} onLogout={handleLogout} />
//       <div className="container mx-auto p-4 mt-20">
//         <Routes>
//           <Route path="/" element={<Feed user={user} />} />
//           <Route path="/login" element={<Login onLogin={loadMe} />} />
//           <Route path="/signup" element={<Signup onSignup={loadMe} />} />
//           <Route path="/profile" element={<Profile user={user} onUpdate={setUser} />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Profile from "./pages/Profile";
import api from "./api";
import FeedPage from "./components/FeedPage";
import Feed from "./pages/Feed";
function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Load logged-in user
  const loadMe = async () => {
    try {
      const res = await api.get("/users/me"); // ✅ correct endpoint
      setUser(res.data);
    } catch (err) {
      console.error("Error fetching user:", err);
      setUser(null);
    }
  };

  // ✅ Load user if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) loadMe();
  }, []);

  // ✅ Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={handleLogout} />
      <div className="container mx-auto p-4 mt-20">
        <Routes>
          <Route path="/" element={<Feed user={user} />} />
          <Route path="/login" element={<Login onLogin={loadMe} />} />
          <Route path="/signup" element={<Signup onSignup={loadMe} />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/profile" element={<Profile user={user} onUpdate={setUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
