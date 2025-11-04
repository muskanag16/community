// import React, { useEffect, useState } from "react";
// import api from "../api";
// import PostCard from "../components/PostCard";

// export default function FeedPage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await api.get("/posts");
//       setPosts(res.data);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto mt-24 p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Feed</h2>
//       {posts.length > 0 ? (
//         posts.map((p) => <PostCard key={p._id} post={p} />)
//       ) : (
//         <p className="text-gray-500 text-center">No posts yet.</p>
//       )}
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import api from "../api";
// import PostCard from "../components/PostCard";

// export default function FeedPage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchFeed = async () => {
//       const res = await api.get("/posts/feed");
//       setPosts(res.data);
//     };
//     fetchFeed();
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto mt-24 p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Feed</h2>
//       {posts.length > 0 ? (
//         posts.map((p) => <PostCard key={p._id} post={p} />)
//       ) : (
//         <p className="text-gray-500 text-center">No posts from others yet.</p>
//       )}
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import api from "../api";
// import PostCard from "../components/PostCard";

// export default function FeedPage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchFeed = async () => {
//       try {
//         const res = await api.get("/posts/feed");
//         setPosts(res.data);
//       } catch (err) {
//         console.error("Error fetching feed:", err);
//       }
//     };
//     fetchFeed();
//   }, []);

//   const handlePostUpdate = (updatedPost) => {
//     setPosts((prev) =>
//       prev.map((p) => (p._id === updatedPost._id ? updatedPost : p))
//     );
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-24 p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Feed</h2>
//       {posts.length > 0 ? (
//         posts.map((p) => (
//           <PostCard key={p._id} post={p} onUpdated={handlePostUpdate} />
//         ))
//       ) : (
//         <p className="text-gray-500 text-center">No posts from others yet.</p>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import api from "../api";
import PostCard from "../components/PostCard";

export default function FeedPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await api.get("/posts/feed");
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching feed:", err);
      }
    };
    fetchFeed();
  }, []);

  const handlePostUpdate = (updatedPost) => {
    setPosts((prev) =>
      prev.map((p) => (p._id === updatedPost._id ? updatedPost : p))
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4"> {/* ↓ smaller top margin */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Feed</h2>
      </div>

      {posts.length > 0 ? (
        posts.map((p) => (
          <PostCard key={p._id} post={p} onUpdated={handlePostUpdate} />
        ))
      ) : (
        <p className="text-gray-500 text-center">No posts from others yet.</p>
      )}
    </div>
  );
}
