import { Link } from "react-router-dom";
import { User, ArrowRight, Pen, Trash2 } from "lucide-react";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
} from "./ui/AlertDialog";

export default function PostCard({ post, onDelete }) {
    return (
        <article>
            {/* Card wrapper with hover effect and full height for equal grid heights */}
            <Card className="hover:shadow-lg group h-full">
                {/* Top section: badges and title */}
                <div className="pt-6 px-6 space-y-6">
                    <div className="flex items-center justify-between">
                        {/* User badge linking to profile */}
                        <Link to="/profile">
                            <Badge variant="outline">
                                <User size={14} />
                                User {post.userId}
                            </Badge>
                        </Link>

                        {/* Post ID badge */}
                        <Badge className="text-violet-700 bg-violet-100">
                            #{post.id}
                        </Badge>
                    </div>

                    {/* Post title */}
                    <h3 className="group-hover:text-violet-600 line-clamp-2 transition-colors duration-150">
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </h3>
                </div>

                {/* Post body/description */}
                <div className="px-6">
                    {/* Line clamp to 3 lines for consistent card height */}
                    <p className="line-clamp-3 text-gray-500">{post.body}</p>
                </div>

                {/* Bottom action buttons */}
                <div className="flex gap-2 p-6 border-t border-slate-100 mt-auto">
                    {/* Read More link */}
                    <Link
                        to={`/posts/${post.id}`}
                        className="flex-1 flex items-center justify-center gap-2 h-9 px-2.5 hover:bg-gray-100 border border-slate-200 rounded-xl transition-colors duration-150">
                        Read More
                        <ArrowRight size={18} />
                    </Link>

                    {/* Edit button linking to edit page */}
                    <Link to={`/posts/${post.id}/edit`}>
                        <button className="flex items-center justify-center w-9 h-9 rounded-md text-blue-500 hover:bg-blue-50 transition-colors duration-150 cursor-pointer">
                            <Pen size={18} />
                        </button>
                    </Link>

                    {/* Delete button (handle delete separately in parent or via prop) */}
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button className="inline-flex w-9 h-9 items-center justify-center rounded-md text-red-500 hover:bg-red-50 outline-none transition-colors duration-150 cursor-pointer">
                                <Trash2 size={18} />
                            </button>
                        </AlertDialogTrigger>

                        <AlertDialogPortal>
                            <AlertDialogOverlay />
                            <AlertDialogContent>
                                <AlertDialogTitle>Delete Post</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Are you sure you want to delete this post?
                                    This action cannot be undone.
                                </AlertDialogDescription>
                                <div className="flex justify-end gap-3">
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={() => onDelete(post.id)}>
                                        Delete
                                    </AlertDialogAction>
                                </div>
                            </AlertDialogContent>
                        </AlertDialogPortal>
                    </AlertDialog>
                </div>
            </Card>
        </article>
    );
}
