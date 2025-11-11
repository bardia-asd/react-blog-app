import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {
    return (
        <>
            <Header />
            <main>
                <div className="container mx-auto px-4 py-8">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
