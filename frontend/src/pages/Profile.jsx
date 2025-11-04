// import React, { useState } from 'react';
// import api from '../api';

// export default function Profile({ user, onUpdate }) {
//   const [name, setName] = useState(user?.name || '');
//   const [avatar, setAvatar] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const form = new FormData();
//       form.append('name', name);
//       if (avatar) form.append('avatar', avatar);

//       await api.put('/users/me', form, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       onUpdate && onUpdate();
//       alert('Profile updated');
//     } catch (err) {
//       console.error(err);
//       alert('Error updating profile');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) return <div>Please login</div>;

//   return (
//     <div className="max-w-md mx-auto mt-6">
//       <div className="bg-white p-6 rounded shadow">
//         <h2 className="text-xl mb-3">Your Profile</h2>
//         <img
//           src={
//             user.avatarUrl ||
//             `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`
//           }
//           className="w-24 h-24 rounded-full mb-3 object-cover"
//           alt="Profile Avatar"
//         />
//         <form onSubmit={submit}>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border rounded mb-3"
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setAvatar(e.target.files[0])}
//             className="mb-3"
//           />
//           <button
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded"
//           >
//             {loading ? 'Saving...' : 'Save'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import api from '../api';

// export default function Profile({ user, onUpdate }) {
//   const [name, setName] = useState(user?.name || '');
//   const [avatar, setAvatar] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const form = new FormData();
//       form.append('name', name);
//       if (avatar) form.append('avatar', avatar);

//       await api.put('/users/me', form, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       onUpdate && onUpdate();
//       alert('Profile updated successfully!');
//     } catch (err) {
//       console.error(err);
//       alert('Error updating profile');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) return <div>Please login</div>;

//   return (
//     <div className="max-w-md mx-auto mt-6">
//       <div className="bg-white p-6 rounded shadow">
//         <h2 className="text-xl font-semibold mb-4">Your Profile</h2>

//         <div className="flex flex-col items-center mb-4">
//           <img
//             src={
//               user.avatarUrl ||
//               `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`
//             }
//             className="w-24 h-24 rounded-full mb-2 object-cover border"
//             alt="Profile Avatar"
//           />
//           <p className="text-gray-600 text-sm">
//             <strong>Current Name:</strong> {user.name}
//           </p>
//           <p className="text-gray-600 text-sm">
//             <strong>Email:</strong> {user.email}
//           </p>
//         </div>

//         <form onSubmit={submit}>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Update Name
//           </label>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border rounded mb-3"
//           />

//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Update Profile Photo
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setAvatar(e.target.files[0])}
//             className="mb-4 w-full"
//           />

//           <button
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             {loading ? 'Saving...' : 'Save Changes'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import api from '../api';

// export default function Profile({ user, onUpdate }) {
//   const [name, setName] = useState(user?.name || '');
//   const [avatar, setAvatar] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const form = new FormData();
//       form.append('name', name);
//       if (avatar) form.append('avatar', avatar);

//       // Update profile
//       await api.put('/users/me', form, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       // Fetch updated user
//       const updatedRes = await api.get('/users/me');
//       onUpdate && onUpdate(updatedRes.data); // 👈 send updated data to App.jsx

//       alert('Profile updated successfully!');
//     } catch (err) {
//       console.error(err);
//       alert('Error updating profile');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) return <div>Please login</div>;

//   return (
//     <div className="max-w-md mx-auto mt-6">
//       <div className="bg-white p-6 rounded shadow">
//         <h2 className="text-xl font-semibold mb-4">Your Profile</h2>

//         <div className="flex flex-col items-center mb-4">
//           <img
//             src={
//               user.avatarUrl ||
//               `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`
//             }
//             className="w-24 h-24 rounded-full mb-2 object-cover border"
//             alt="Profile Avatar"
//           />
//           <p className="text-gray-600 text-sm">
//             <strong>Current Name:</strong> {user.name}
//           </p>
//           <p className="text-gray-600 text-sm">
//             <strong>Email:</strong> {user.email}
//           </p>
//         </div>

//         <form onSubmit={submit}>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Update Name
//           </label>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border rounded mb-3"
//           />

//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Update Profile Photo
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setAvatar(e.target.files[0])}
//             className="mb-4 w-full"
//           />

//           <button
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             {loading ? 'Saving...' : 'Save Changes'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import api from "../api";

export default function Profile({ user, onUpdate }) {
  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = new FormData();
      form.append("name", name);
      if (avatar) form.append("avatar", avatar);

      await api.put("/users/me", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const updatedRes = await api.get("/users/me");
      onUpdate && onUpdate(updatedRes.data);

      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <div className="text-center mt-10 text-gray-600">Please login</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow overflow-hidden">
      {/* --- Cover Banner --- */}
      <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 h-40 sm:h-48">
        {/* Profile Avatar */}
        <div className="absolute -bottom-14 left-8 flex items-center">
          <img
            src={
              user.avatarUrl ||
              `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${encodeURIComponent(
                user.name
              )}`
            }
            alt="Profile Avatar"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
      </div>

      {/* --- Profile Content --- */}
      <div className="pt-16 pb-6 px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="border-t pt-6 mt-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Edit Profile</h3>
          <form onSubmit={submit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Update Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Update Profile Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setAvatar(e.target.files[0])}
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-medium"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
