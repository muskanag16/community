// import React from 'react';
// import api from '../api';

// export default function PostCard({ post, currentUser, onUpdated }) {
//   const isOwner = currentUser && post.author && post.author._id === currentUser._id;
//   const liked = currentUser && post.likes && post.likes.includes(currentUser._id);

//   const toggleLike = async () => {
//     try {
//       const res = await api.post(`/posts/${post._id}/like`);
//       onUpdated && onUpdated(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const deletePost = async () => {
//     if (!confirm('Delete this post?')) return;
//     try {
//       await api.delete(`/posts/${post._id}`);
//       onUpdated && onUpdated(null, post._id);
//     } catch (err) { console.error(err); }
//   };

//   return (
//     <div className="bg-white rounded shadow-sm p-4 mb-4">
//       <div className="flex items-center gap-3 mb-2">
// <img
//   src={
//     post.user?.profileImage
//       ? `http://localhost:5000/${post.user.profileImage}`
//       : "/default-avatar.png"
//   }
//   alt="avatar"
//   className="w-10 h-10 rounded-full"
// />

//         <div>
//           <div className="font-semibold">{post.author.name}</div>
//           <div className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</div>
//         </div>
//       </div>

//       <p className="mb-2 whitespace-pre-wrap">{post.text}</p>
//       {post.imageUrl && (
//         <img src={post.imageUrl.startsWith('/') ? `${import.meta.env.VITE_API_BASE?.replace('/api','') || 'http://localhost:5000'}${post.imageUrl}` : post.imageUrl} alt="" className="max-h-80 w-full object-cover rounded mb-2" />
//       )}

//       <div className="flex items-center gap-4">
//         <button onClick={toggleLike} className={`px-3 py-1 rounded ${liked ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
//           Like {post.likes?.length ? `(${post.likes.length})` : ''}
//         </button>
//         {isOwner && (
//           <button onClick={deletePost} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
//         )}
//       </div>
//     </div>
//   );
// }
import React from "react";
import api from "../api";

export default function PostCard({ post, currentUser, onUpdated }) {
  if (!post) return null; // early return if post is missing

  // ✅ Use optional chaining and default values to avoid undefined errors
  const author = post.author || post.user || {};
  const isOwner = currentUser && author._id === currentUser._id;
  const liked = currentUser && post.likes?.includes(currentUser._id);

  const toggleLike = async () => {
    try {
      const res = await api.post(`/posts/${post._id}/like`);
      onUpdated && onUpdated(res.data);
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };

  const deletePost = async () => {
    if (!confirm("Delete this post?")) return;
    try {
      await api.delete(`/posts/${post._id}`);
      onUpdated && onUpdated(null, post._id);
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  // ✅ Fix avatar image source (supports both author.profileImage and post.user.profileImage)
  const avatarUrl = author.profileImage
    ? `http://localhost:5000/${author.profileImage}`
    : post.user?.profileImage
    ? `http://localhost:5000/${post.user.profileImage}`
    : "/default-avatar.png";

  return (
    <div className="bg-white rounded shadow-sm p-4 mb-4">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={avatarUrl}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold">{author.name || "Unknown User"}</div>
          <div className="text-sm text-gray-500">
            {post.createdAt
              ? new Date(post.createdAt).toLocaleString()
              : "Just now"}
          </div>
        </div>
      </div>

      <p className="mb-2 whitespace-pre-wrap">{post.text || ""}</p>

      {post.imageUrl && (
        <img
          src={
            post.imageUrl.startsWith("/")
              ? `${
                  import.meta.env.VITE_API_BASE?.replace("/api", "") ||
                  "http://localhost:5000"
                }${post.imageUrl}`
              : post.imageUrl
          }
          alt="post"
          className="max-h-80 w-full object-cover rounded mb-2"
        />
      )}

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLike}
          className={`px-3 py-1 rounded ${
            liked ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          Like {post.likes?.length ? `(${post.likes.length})` : ""}
        </button>
        {isOwner && (
          <button
            onClick={deletePost}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}


import React from "react";
import api from "../api";

export default function PostCard({ post, currentUser, onUpdated }) {
  if (!post) return null;

  // Get author details safely
  const author = post.author || post.user || {};
  const isOwner = currentUser && author._id === currentUser._id;
  const liked = currentUser && post.likes?.includes(currentUser._id);

 const toggleLike = async () => {
  try {
    const res = await api.post(`/posts/${post._id}/like`);
    onUpdated && onUpdated(res.data); // updates UI immediately
  } catch (err) {
    console.error("Error liking post:", err);
  }
};


  const deletePost = async () => {
    if (!confirm("Delete this post?")) return;
    try {
      await api.delete(`/posts/${post._id}`);
      onUpdated && onUpdated(null, post._id);
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  // ✅ Avatar source
  const avatarUrl = author.profileImage
    ? `http://localhost:5000/${author.profileImage}`
    : post.user?.profileImage
    ? `http://localhost:5000/${post.user.profileImage}`
    : "https://ui-avatars.com/api/?background=ddd&name=" + encodeURIComponent(author.name || "User");

  // ✅ Use `post.image` instead of `post.imageUrl`
  const imageUrl =
    post.image && !post.image.startsWith("http")
      ? `http://localhost:5000/${post.image}`
      : post.image;

  return (
    <div className="bg-white rounded shadow-sm p-4 mb-4">
      {/* Post header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatarUrl}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover border"
        />
        <div>
          <div className="font-semibold">{author.name || "Unknown User"}</div>
          <div className="text-sm text-gray-500">
            {post.createdAt
              ? new Date(post.createdAt).toLocaleString()
              : "Just now"}
          </div>
        </div>
      </div>

      {/* Post content */}
      {post.text && <p className="mb-3 whitespace-pre-wrap">{post.text}</p>}

      {/* ✅ Post image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Post content"
          className="max-h-96 w-full object-cover rounded mb-3"
        />
      )}

      {/* Like & Delete */}
      <div className="flex items-center gap-4">
        {/* <button
          onClick={toggleLike}
          className={`px-3 py-1 rounded transition ${
            liked ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          👍 Like {post.likes?.length ? `(${post.likes.length})` : ""}
        </button> */}
        <button
  onClick={toggleLike}
  className={`px-3 py-1 rounded transition ${
    post.likes?.includes(currentUser?._id)
      ? "bg-blue-600 text-white"
      : "bg-gray-100"
  }`}
>
  👍 Like {post.likes?.length ? `(${post.likes.length})` : ""}
</button>

        {isOwner && (
        //   <button
        //     onClick={deletePost}
        //     className="px-3 py-1 bg-red-500 text-white rounded transition"
        //   >
        //     🗑️ Delete
        //   </button>
        <button
  onClick={deletePost}
  className="px-3 py-1 bg-blue-500 text-white rounded transition"
>
  🗑️ Delete
</button>
        )}
      </div>
    </div>
  );
}
import React from "react";
import api from "../api";

export default function PostCard({ post, currentUser, onUpdated }) {
  if (!post) return null;

  const API_BASE = import.meta.env.VITE_API_BASE;

  // Get author details safely
  const author = post.author || post.user || {};
  const isOwner = currentUser && author._id === currentUser._id;
  const liked = currentUser && post.likes?.includes(currentUser._id);

  const toggleLike = async () => {
    try {
      const res = await api.post(`/posts/${post._id}/like`);
      onUpdated && onUpdated(res.data); // updates UI immediately
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };

  const deletePost = async () => {
    if (!confirm("Delete this post?")) return;
    try {
      await api.delete(`/posts/${post._id}`);
      onUpdated && onUpdated(null, post._id);
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  // ✅ Avatar source using environment variable
  const avatarUrl = author.profileImage
    ? `${API_BASE}/${author.profileImage}`
    : post.user?.profileImage
    ? `${API_BASE}/${post.user.profileImage}`
    : "https://ui-avatars.com/api/?background=ddd&name=" +
      encodeURIComponent(author.name || "User");

  // ✅ Post image using API_BASE
  const imageUrl =
    post.image && !post.image.startsWith("http")
      ? `${API_BASE}/${post.image}`
      : post.image;

  return (
    <div className="bg-white rounded shadow-sm p-4 mb-4">
      {/* Post header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatarUrl}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover border"
        />
        <div>
          <div className="font-semibold">{author.name || "Unknown User"}</div>
          <div className="text-sm text-gray-500">
            {post.createdAt
              ? new Date(post.createdAt).toLocaleString()
              : "Just now"}
          </div>
        </div>
      </div>

      {/* Post content */}
      {post.text && <p className="mb-3 whitespace-pre-wrap">{post.text}</p>}

      {/* ✅ Post image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Post content"
          className="max-h-96 w-full object-cover rounded mb-3"
        />
      )}

      {/* Like & Delete */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleLike}
          className={`px-3 py-1 rounded transition ${
            post.likes?.includes(currentUser?._id)
              ? "bg-blue-600 text-white"
              : "bg-gray-100"
          }`}
        >
          👍 Like {post.likes?.length ? `(${post.likes.length})` : ""}
        </button>

        {isOwner && (
          <button
            onClick={deletePost}
            className="px-3 py-1 bg-blue-500 text-white rounded transition"
          >
            🗑️ Delete
          </button>
        )}
      </div>
    </div>
  );
}
