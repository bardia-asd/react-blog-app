export default function Card({ className, children }) {
    return (
        <div
            className={`flex flex-col gap-6 bg-white border border-gray-200 rounded-xl transition-all duration-150 ${className}`}>
            {children}
        </div>
    );
}
