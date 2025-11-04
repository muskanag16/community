// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar({ user, onLogout }) {
//   return (
//     <nav className="bg-white shadow-sm">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         <Link to="/" className="font-bold text-xl">MiniLinkedIn</Link>
//         <div className="flex items-center gap-4">
//           <Link to="/" className="hidden md:block">Feed</Link>
//           {user ? (
//             <>
//               <Link to="/profile" className="flex items-center gap-2">
//                 <img src={user.avatarUrl || 'https://ui-avatars.com/api/?background=ddd&name=' + encodeURIComponent(user.name)} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
//                 <span className="hidden sm:block">{user.name}</span>
//               </Link>
//               <button onClick={onLogout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
//               <Link to="/signup" className="px-3 py-1 bg-blue-600 text-white rounded">Signup</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   )
// }
import React from "react";
import { Link } from "react-router-dom";


import { FaHome, FaUserCircle, FaSignOutAlt, FaNewspaper } from "react-icons/fa";

import { MdWork } from "react-icons/md";

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="bg-white border-b shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-700 font-bold text-2xl"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="MiniLinkedIn"
            className="w-8 h-8"
          />
          MiniLinkedIn
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <Link
            to="/"
            className="flex flex-col items-center hover:text-blue-600 transition"
          >
            <FaHome className="text-lg" />
            <span className="text-xs">Home</span>
          </Link>

         <Link
  to="/feed"
  className="flex flex-col items-center hover:text-blue-600 transition"
>
  <FaNewspaper className="text-lg" />
  <span className="text-xs">Feed</span>
</Link>

          {user ? (
            <>
              <Link
                to="/profile"
                className="flex flex-col items-center hover:text-blue-600 transition"
              >
                <img
                  src={
                    user.avatarUrl ||
                    `https://ui-avatars.com/api/?background=ddd&name=${encodeURIComponent(
                      user.name
                    )}`
                  }
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover border border-gray-300"
                />
                <span className="text-xs mt-1">{user.name.split(" ")[0]}</span>
              </Link>
              <button
                onClick={onLogout}
                className="flex flex-col items-center text-red-500 hover:text-red-600 transition"
              >
                <FaSignOutAlt className="text-lg" />
                <span className="text-xs">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu (optional) */}
        <div className="md:hidden flex items-center gap-3">
          {user ? (
            <Link to="/profile">
              <img
                src={
                  user.avatarUrl ||
                  `https://ui-avatars.com/api/?background=ddd&name=${encodeURIComponent(
                    user.name
                  )}`
                }
                alt="avatar"
                className="w-9 h-9 rounded-full object-cover border border-gray-300"
              />
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUserCircle, FaSignOutAlt, FaNewspaper } from "react-icons/fa"; // added FaNewspaper icon

// export default function Navbar({ user, onLogout }) {
//   return (
//     <nav className="bg-white border-b shadow-sm fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 text-blue-700 font-bold text-2xl"
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
//             alt="MiniLinkedIn"
//             className="w-8 h-8"
//           />
//           MiniLinkedIn
//         </Link>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center gap-6 text-gray-700">
//           <Link
//             to="/"
//             className="flex flex-col items-center hover:text-blue-600 transition"
//           >
//             <FaHome className="text-lg" />
//             <span className="text-xs">Home</span>
//           </Link>

//           {/* 👇 Replaced Jobs with Feed */}
//           <Link
//             to="/feed"
//             className="flex flex-col items-center hover:text-blue-600 transition"
//           >
//             <FaNewspaper className="text-lg" />
//             <span className="text-xs">Feed</span>
//           </Link>

//           {user ? (
//             <>
//               <Link
//                 to="/profile"
//                 className="flex flex-col items-center hover:text-blue-600 transition"
//               >
//                 <img
//                   src={
//                     user.avatarUrl ||
//                     `https://ui-avatars.com/api/?background=ddd&name=${encodeURIComponent(
//                       user.name
//                     )}`
//                   }
//                   alt="avatar"
//                   className="w-8 h-8 rounded-full object-cover border border-gray-300"
//                 />
//                 <span className="text-xs mt-1">{user.name.split(" ")[0]}</span>
//               </Link>
//               <button
//                 onClick={onLogout}
//                 className="flex flex-col items-center text-red-500 hover:text-red-600 transition"
//               >
//                 <FaSignOutAlt className="text-lg" />
//                 <span className="text-xs">Logout</span>
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//               >
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden flex items-center gap-3">
//           {user ? (
//             <Link to="/profile">
//               <img
//                 src={
//                   user.avatarUrl ||
//                   `https://ui-avatars.com/api/?background=ddd&name=${encodeURIComponent(
//                     user.name
//                   )}`
//                 }
//                 alt="avatar"
//                 className="w-9 h-9 rounded-full object-cover border border-gray-300"
//               />
//             </Link>
//           ) : (
//             <Link
//               to="/login"
//               className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
