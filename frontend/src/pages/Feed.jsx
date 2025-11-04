// import React, { useEffect, useState } from 'react';
// import api from '../api';
// import CreatePost from '../components/CreatePost';
// import PostCard from '../components/PostCard';

// export default function Feed({ user }) {
//   const [posts, setPosts] = useState([]);

//   const loadPosts = async () => {
//     try {
//       const res = await api.get('/posts');
//       setPosts(res.data);
//     } catch (err) { console.error(err); }
//   };

//   useEffect(() => {
//     loadPosts();
//   }, []);

//   const handlePosted = (post) => {
//     // new post comes from server; do a small update
//     setPosts(prev => [post, ...prev]);
//   };

//   const handleUpdated = (updatedPost, deletedId) => {
//     if (deletedId) {
//       setPosts(prev => prev.filter(p => p._id !== deletedId));
//     } else if (updatedPost) {
//       setPosts(prev => prev.map(p => p._id === updatedPost._id ? updatedPost : p));
//     } else {
//       // generic reload
//       loadPosts();
//     }
//   };
  

//   return (
//     <div className="max-w-3xl mx-auto">
//       <CreatePost user={user} onPosted={handlePosted} />
//       {posts.map(post => (
//         <PostCard key={post._id} post={post} currentUser={user} onUpdated={handleUpdated} />
//       ))}
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import api from '../api';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';

export default function Feed({ user }) {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    try {
      const res = await api.get('/posts');
      
      // ✅ Show only posts created by the current user
      const myPosts = res.data.filter(
        (p) => p.user?._id === user?._id || p.author?._id === user?._id
      );

      setPosts(myPosts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user?._id) {
      loadPosts();
    }
  }, [user]);

  const handlePosted = (post) => {
    // new post comes from server; update instantly
    setPosts((prev) => [post, ...prev]);
  };

  const handleUpdated = (updatedPost, deletedId) => {
    if (deletedId) {
      setPosts((prev) => prev.filter((p) => p._id !== deletedId));
    } else if (updatedPost) {
      setPosts((prev) =>
        prev.map((p) => (p._id === updatedPost._id ? updatedPost : p))
      );
    } else {
      loadPosts();
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <CreatePost user={user} onPosted={handlePosted} />
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            currentUser={user}
            onUpdated={handleUpdated}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-4">You haven’t posted anything yet.</p>
      )}
    </div>
  );
}
