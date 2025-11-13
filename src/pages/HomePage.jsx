import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import usePosts from "../hooks/usePosts";
import PostCard from "../components/PostCard";
import PostCardSkeleton from "../components/PostCardSkeleton";

export default function HomePage() {
    const { posts, loading, error, deletePost } = usePosts(
        "https://dummyjson.com/posts"
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const filtered = searchQuery
            ? posts.filter(
                (post) =>
                    post.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    post.body
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
            )
            : posts;

        setFilteredPosts(filtered);
    }, [searchQuery, posts]);

    return (
        <section>
            <div className="mb-8 space-y-6">
                <div>
                    <h2 className="text-xl font-medium mb-2">
                        Discover Stories
                    </h2>
                    <p className="text-gray-600">
                        Explore our collection of insightful articles
                    </p>
                </div>

                <div className="relative max-w-md">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-9 pl-10 pr-3 py-1 rounded-lg bg-white border border-gray-200 focus:outline-0 focus:ring-4 focus:ring-gray-300 transition-all duration-150"
                        placeholder="Search posts..."
                    />
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <PostCardSkeleton key={i} />
                    ))}
                </div>
            ) : !error && filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500">
                        No posts found. Try a different search term.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                        <PostCard
                            key={post.id}
                            post={post}
                            onDelete={deletePost}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
