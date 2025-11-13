import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, User, Pen, Trash2, Eye } from "lucide-react";
import usePost from "../hooks/usePost";
import usePosts from "../hooks/usePosts";
import Card from "../components/ui/Card";
import Skeleton from "../components/ui/Skeleton";
import Badge from "../components/ui/Badge";

export default function PostDetail() {
    const param = useParams();
    const navigate = useNavigate();

    const { post, loading, error } = usePost(
        "https://dummyjson.com/posts",
        param.id
    );

    return (
        <section>
            {/* Show skeleton loader while post data is loading */}
            {loading && (
                <div className="max-w-4xl mx-auto space-y-6">
                    {/* Skeleton for back button placeholder */}
                    <Skeleton className="w-32 h-10" />
                    {/* Skeleton for post card content */}
                    <Card className="p-6">
                        <div className="space-y-4">
                            <Skeleton className="w-3/4 h-8" />
                            <div className="flex gap-3">
                                <Skeleton className="w-20 h-6" />
                                <Skeleton className="w-20 h-6" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Skeleton className="w-full h-4" />
                            <Skeleton className="w-full h-4" />
                            <Skeleton className="w-3/4 h-4" />
                        </div>
                    </Card>
                </div>
            )}

            {/* Render post details once data is loaded successfully */}
            {!loading && !error && post && (
                <div className="max-w-4xl mx-auto space-y-6">
                    {/* Back button to navigate to home page */}
                    <button
                        onClick={() => navigate("/")}
                        className="inline-flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-200/50 font-medium text-sm transition-colors duration-150 cursor-pointer">
                        <ArrowLeft size={18} />
                        Back to Home
                    </button>

                    {/* Post content card */}
                    <Card className="p-6">
                        {/* Post header section */}
                        <div className="space-y-4">
                            {/* Tags section */}
                            <div className="flex gap-3">
                                {post.tags?.map((tag, index) => (
                                    <Badge
                                        key={index}
                                        className="capitalize"
                                        variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            {/* Post title */}
                            <h2>{post.title}</h2>
                            {/* Post metadata (user, id, views) */}
                            <div className="flex gap-3">
                                <Badge variant="outline">
                                    <User size={16} />
                                    User {post.userId}
                                </Badge>
                                <Badge className="bg-violet-100 text-violet-700">
                                    Post #{post.id}
                                </Badge>
                                <span className="flex items-center gap-1.5 text-gray-600 text-sm">
                                    <Eye size={16} />
                                    {post.views} views
                                </span>
                            </div>
                        </div>
                        {/* Post body content */}
                        <p className="text-gray-600">{post.body}</p>

                        {/* Action buttons (edit & delete) */}
                        <div className="flex gap-3">
                            {/* Edit post button */}
                            <Link to={`/posts/${post.id}/edit`}>
                                <button className="flex items-center gap-3 py-2 px-3 rounded-lg border border-blue-500 text-blue-500 text-sm hover:bg-blue-50 transition-colors duration-150 cursor-pointer">
                                    <Pen size={18} />
                                    Edit Post
                                </button>
                            </Link>
                            {/* Delete post button */}
                            <button className="flex items-center gap-3 py-2 px-3 rounded-lg border border-red-500 text-red-500 text-sm hover:bg-red-50 transition-colors duration-150 cursor-pointer">
                                <Trash2 size={18} />
                                Delete Post
                            </button>
                        </div>
                    </Card>
                </div>
            )}
        </section>
    );
}
