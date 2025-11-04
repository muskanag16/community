// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import api from '../api';

// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post('/auth/login', { email, password });
//       localStorage.setItem('token', res.data.token);
//       onLogin && onLogin();
//       navigate('/');
//     } catch (err) {
//       console.error(err);
//       alert(err?.response?.data?.msg || 'Login failed');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-2xl mb-4">Login</h2>
//       <form onSubmit={submit} className="bg-white p-6 rounded shadow">
//         <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded mb-3" />
//         <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded mb-3" />
//         <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
//         <div className="text-sm mt-2">Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link></div>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      onLogin && onLogin();
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.msg || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Branding */}
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-blue-50 p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 tracking-tight">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center text-lg max-w-md">
          Reconnect with your professional world and continue your journey.  
          Sign in to your account to access opportunities, connections, and insights.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn Logo"
          className="w-24 h-24 mt-8 opacity-90"
        />
      </div>

      {/* Right Section - Login Form */}
      <div className="md:w-1/2 flex items-center justify-center bg-white p-8 shadow-lg">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Sign in to your account
          </h2>

          <form onSubmit={submit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
          > */}
            {/* <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button> */}

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
