import React from "react";

import Nav, { navConfig } from "../components/Nav";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
    // TODO: update document title

    return (
        <main className="min-h-screen flex flex-col">
            <Nav
                navItems={navConfig}
            />

            <section className="flex-1 px-6">
                {children}
            </section>

            <Footer />
        </main>
    )
}