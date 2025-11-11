import { NavLink } from "react-router-dom";
import {
    FileText,
    House,
    SquarePen,
    User,
    TextAlignJustify,
    X,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
    // State for mobile menu open/close
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Tailwind class strings for styling links
    const baseStyle =
        "flex items-center gap-3 h-10 sm:h-8 px-2.5 rounded-lg text-sm font-medium transition-colors duration-150";
    const hoverStyle = "hover:bg-gray-200/60";
    const activeStyle = "bg-gray-800 text-white hover:bg-gray-800/90";

    // Navigation items: label, icon, and route
    const navItems = [
        { id: "home", label: "Home", icon: House, to: "/" },
        { id: "create", label: "Write", icon: SquarePen, to: "/posts/new" },
        { id: "profile", label: "Profile", icon: User, to: "/profile" },
    ];

    return (
        <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
            <div className="container mx-auto p-4">
                <div className="flex items-center justify-between">
                    {/* Logo and site title */}
                    <NavLink to="/" className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-linear-to-br from-blue-500 to-purple-500 text-gray-100">
                            <FileText size={20} />
                        </span>
                        <h1 className="font-semibold text-lg">BlogHub</h1>
                    </NavLink>

                    {/* Desktop navigation (hidden on small screens) */}
                    <nav className="hidden sm:block">
                        <ul className="flex items-center gap-2">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.id}>
                                        <NavLink
                                            to={item.to}
                                            className={({ isActive }) =>
                                                `${baseStyle} ${
                                                    isActive
                                                        ? activeStyle
                                                        : hoverStyle
                                                }`
                                            }>
                                            <Icon size={20} />
                                            {item.label}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Mobile navigation (shown on small screens) */}
                    <div className="sm:hidden">
                        {/* Hamburger button */}
                        <button onClick={() => setMobileMenuOpen(true)}>
                            <TextAlignJustify size={20} />
                        </button>

                        {/* Mobile menu sliding panel */}
                        <div
                            className={`fixed top-0 bottom-0 ${
                                mobileMenuOpen ? "right-0" : "-right-64"
                            } flex flex-col gap-5 w-64 bg-white transition-all duration-200 z-50`}>
                            {/* Mobile menu header with logo and close button */}
                            <div className="flex items-center justify-between p-4">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-linear-to-br from-blue-500 to-purple-500 text-gray-100">
                                        <FileText size={20} />
                                    </span>
                                    <h1 className="font-semibold">BlogHub</h1>
                                </div>

                                <button
                                    onClick={() => setMobileMenuOpen(false)}>
                                    <X size={20} className="text-gray-700" />
                                </button>
                            </div>

                            {/* Mobile navigation links */}
                            <nav className="flex flex-col gap-2 px-1">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <NavLink
                                            key={item.id}
                                            to={item.to}
                                            className={({ isActive }) =>
                                                `${baseStyle} ${
                                                    isActive
                                                        ? activeStyle
                                                        : hoverStyle
                                                }`
                                            }>
                                            <Icon size={20} />
                                            {item.label}
                                        </NavLink>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Overlay background for mobile menu */}
                        <div
                            className={`fixed inset-0 bg-gray-950/25 ${
                                mobileMenuOpen
                                    ? "opacity-100 visible"
                                    : "opacity-0 invisible"
                            } transition-opacity duration-200 z-40`}
                            onClick={() => setMobileMenuOpen(false)}></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
