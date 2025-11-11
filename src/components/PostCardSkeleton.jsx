import Card from "./ui/Card";
import Skeleton from "./ui/Skeleton";

export default function PostCardSkeleton() {
    return (
        <Card className="p-6">
            <div className="space-y-3">
                <div className="flex justify-between items-start">
                    <Skeleton className="w-20 h-6" />
                    <Skeleton className="w-12 h-6" />
                </div>
                <Skeleton className="h-6 w-3/4" />
            </div>

            <div className="space-y-2">
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-4 w-2/3"/>
            </div>

            <div className="flex gap-2 pt-4 border-t border-t-slate-100">
                <Skeleton className="h-9 flex-1"/>
                <Skeleton className="h-9 w-9"/>
                <Skeleton className="h-9 w-9"/>
            </div>
        </Card>
    );
}
