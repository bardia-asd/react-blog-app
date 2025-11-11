import { useEffect, useState } from "react";

const usePost = (url, id) => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPost = async () => {
        if (!id) return;
        setLoading(true);
        try {
            const res = await fetch(`${url}/${id}`);
            if (!res.ok) throw new Error("Failed to fetch post");
            const data = await res.json();
            setPost(data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [url, id]);

    return { post, loading, error };
};

export default usePost;
