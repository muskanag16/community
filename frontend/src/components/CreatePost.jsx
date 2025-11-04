// // import React, { useState } from 'react';
// // import api from '../api';

// // export default function CreatePost({ user, onPosted }) {
// //   const [text, setText] = useState('');
// //   const [image, setImage] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     if (!text.trim()) return;
// //     setLoading(true);
// //     try {
// //       const form = new FormData();
// //       form.append('text', text);
// //       if (image) form.append('image', image);

// //       const res = await api.post('/posts', form, {
// //         headers: { 'Content-Type': 'multipart/form-data' }
// //       });

// //       setText('');
// //       setImage(null);
// //       onPosted && onPosted(res.data);
// //     } catch (err) {
// //       console.error(err);
// //       alert('Error creating post');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (!user) return null;

// //   return (
// //     <div className="bg-white p-4 rounded shadow-sm mb-4">
// //       <form onSubmit={submit}>
// //         <textarea value={text} onChange={e => setText(e.target.value)} placeholder={`What's on your mind, ${user.name.split(' ')[0]}?`} className="w-full border p-2 rounded mb-2" rows={3} />
// //         <div className="flex items-center justify-between">
// //           <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
// //           <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">{loading ? 'Posting...' : 'Post'}</button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import api from "../api";

// export default function CreatePost({ user, onPosted }) {
//   const [text, setText] = useState("");
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     if (!text.trim()) return;
//     setLoading(true);
//     try {
//       const form = new FormData();
//       form.append("text", text);
//       if (image) form.append("image", image);

//       const res = await api.post("/posts", form, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setText("");
//       setImage(null);
//       onPosted && onPosted(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Error creating post");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) return null;

//   return (
//     <div className="w-full flex justify-center px-4 mt-10 sm:mt-28 md:mt-32">
//       {/* mt-24 ensures enough space below navbar even if it's fixed */}
//       <div className="w-full max-w-2xl bg-white border rounded-xl shadow-md p-4">
//         {/* Header with avatar */}
//         <div className="flex items-start gap-3 mb-3">
//           <img
//             src={
//               user.avatarUrl ||
//               `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${encodeURIComponent(
//                 user.name
//               )}`
//             }
//             alt="Profile"
//             className="w-12 h-12 rounded-full object-cover border border-gray-300"
//           />
//           <form onSubmit={submit} className="flex-1">
//             <textarea
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               placeholder={`What's on your mind, ${user.name.split(" ")[0]}?`}
//               className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
//               rows={3}
//             />

//             {/* Footer with upload + post */}
//             <div className="flex items-center justify-between mt-3">
//               <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-blue-600">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => setImage(e.target.files[0])}
//                   className="hidden"
//                 />
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 16.5v-9m0 0l-3 3m3-3l3 3M4.5 19.5h15"
//                   />
//                 </svg>
//                 Add Image
//               </label>

//               <button
//                 disabled={loading}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all"
//               >
//                 {loading ? "Posting..." : "Post"}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Image Preview */}
//         {image && (
//           <div className="mt-3">
//             <img
//               src={URL.createObjectURL(image)}
//               alt="Preview"
//               className="rounded-lg max-h-64 object-cover w-full border border-gray-200"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import api from "../api";

export default function CreatePost({ user, onPosted }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    try {
      const form = new FormData();
      form.append("text", text);
      if (image) form.append("image", image);

      const res = await api.post("/posts", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setText("");
      setImage(null);
      onPosted && onPosted(res.data);
    } catch (err) {
      console.error(err);
      alert("Error creating post");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="w-full flex justify-center px-4 mt-6">
      {/* 👆 Reduced top margin from mt-32 → mt-6 */}

      <div className="w-full max-w-2xl bg-white border rounded-xl shadow-md p-4">
        {/* Header with avatar */}
        <div className="flex items-start gap-3 mb-3">
          <img
            src={
              user.avatarUrl ||
              `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${encodeURIComponent(
                user.name
              )}`
            }
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border border-gray-300"
          />

          <form onSubmit={submit} className="flex-1">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`What's on your mind, ${user.name.split(" ")[0]}?`}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              rows={3}
            />

            {/* Footer with upload + post */}
            <div className="flex items-center justify-between mt-3">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-blue-600">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="hidden"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5v-9m0 0l-3 3m3-3l3 3M4.5 19.5h15"
                  />
                </svg>
                Add Image
              </label>

              <button
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all"
              >
                {loading ? "Posting..." : "Post"}
              </button>
            </div>
          </form>
        </div>

        {/* Image Preview */}
        {image && (
          <div className="mt-3">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="rounded-lg max-h-64 object-cover w-full border border-gray-200"
            />
          </div>
        )}
      </div>
    </div>
  );
}
