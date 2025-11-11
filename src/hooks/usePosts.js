import { useEffect, useState } from "react";

const usePosts = (url) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch all posts
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch posts");
            const data = await res.json();
            setPosts(data.posts);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // Add a new post
    const addPost = async (post) => {
        try {
            const res = await fetch(`${url}/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(post),
            });
            if (!res.ok) throw new Error("Failed to add post");
            const newPost = await res.json();
            setPosts((prev) => [...prev, newPost]);
        } catch (err) {
            setError(err);
        }
    };

    // Update an existing post
    const editPost = async (id, updatedPost) => {
        try {
            const res = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedPost),
            });

            if (!res.ok) throw new Error("Failed to update post");

            const data = await res.json();
            setPosts((prev) =>
                prev.map((post) => (post.id === id ? data : post))
            );
        } catch (err) {
            setError(err);
        }
    };

    // Delete a post
    const deletePost = async (id) => {
        try {
            const res = await fetch(`${url}/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete post");
            setPosts((prev) => prev.filter((post) => post.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [url]);

    return { posts, loading, error, addPost, editPost, deletePost };
};

export default usePosts;
